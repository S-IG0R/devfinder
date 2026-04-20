import styles from './Avatar.module.scss';
import { useState } from 'react';
import FallbackAvatar from '../FallbackAvatar/FallbackAvatar';
import type { CSSProperties } from 'react';
import type { GH_LocalUser } from '../../types';

export interface IAvatar extends Pick<GH_LocalUser, 'avatar' | 'name'>{
  style?: CSSProperties;
}

const Avatar = ({ avatar, name, style }: IAvatar) => {
  const [isError, setIsError] = useState(false);

  const alt = name ? String(name) : 'user avatar';

  return isError ? (
    <FallbackAvatar name={name} />
  ) : (
    <img
      style={style}
      className={styles.avatar}
      src={avatar}
      alt={alt}
      onError={() => {
        setIsError(true);
      }}
    />
  );
};

export default Avatar;
