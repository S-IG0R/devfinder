import styles from './FallbackAvatar.module.scss';
import { type CSSProperties } from 'react';
import type { GH_LocalUser } from 'types';

interface IFallbackAvatar extends Pick<GH_LocalUser, 'name'> {
  style?: CSSProperties;
}

const FallbackAvatar = ({ style, name }: IFallbackAvatar) => {

  return (
    <div style={style} className={styles.fallback}>
      {name ? String(name)[0] : 'No photo'}
    </div>
  );
};

export default FallbackAvatar;
