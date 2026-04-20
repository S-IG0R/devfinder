import styles from './Bio.module.scss';
import { useEffect, type CSSProperties } from 'react';
import type { GH_LocalUser } from 'types';

import Cursor from '../../components/Cursor/Cursor';
import useTypeText from '../../hooks/useTypeText';

export interface IBio extends Pick<GH_LocalUser, 'bio'> {
  style?: CSSProperties;
  next: () => void;
  isAnimate: boolean;
}

const Bio = ({ bio, style, isAnimate, next }: IBio) => {
  const text = bio || `This user profile has no bio.`;

  const [bioTyped, isDoneBio] = useTypeText(text, 40, isAnimate);

  useEffect(() => {
    if (!isDoneBio) return;
    next();
  }, [isDoneBio]);

  return (
    <p style={style} className={`${styles.bio} ${bio ? '' : styles.emptyBio}`}>
      {bioTyped}
      {!isDoneBio && isAnimate && <Cursor cursorType="|" />}
    </p>
  );
};

export default Bio;
