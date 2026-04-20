import styles from './Title.module.scss';
import Cursor from '../Cursor/Cursor';
import type { GH_LocalUser } from 'types';
import { useEffect, type CSSProperties } from 'react';
import useTypeText from '../../hooks/useTypeText';

export interface ITitle extends Pick<
  GH_LocalUser,
  'name' | 'login' | 'created'
> {
  style?: CSSProperties;
  next: () => void;
  isAnimate: boolean;
}

const Title = ({ created, login, name, isAnimate, next, style = {} }: ITitle) => {
  const convertData = (data: string, format: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat('en-GB', format).format(new Date(data));
  };

  const jointedDate = convertData(created, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const [nameTyped, isDoneName] = useTypeText(name || 'No name', 40, isAnimate);

  const [loginTyped, isDoneLogin] = useTypeText(
    '@' + login,
    40,
    !!isDoneName,
  );

  const [joined, isDoneJoined] = useTypeText(
    'Joined ' + jointedDate,
    40,
    !!isDoneLogin,
  );

  useEffect(() => {
    if (!isDoneJoined) return;
    next()
  }, [isDoneJoined]);

  return (
    <div style={style} className={styles.container}>
      <h2 className={styles.name}>
        {nameTyped}
        {!isDoneName && <Cursor cursorType="|" />}
      </h2>
      <div>
        <a
          className={styles.login}
          href={`https://github.com/${login}`}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {loginTyped}
          {!isDoneLogin && isDoneName && <Cursor cursorType="|" />}
        </a>
      </div>
      <span className={styles.joinDate}>
        {joined}
        {!isDoneJoined && isDoneLogin && <Cursor cursorType="|" />}
      </span>
    </div>
  );
};

export default Title;
