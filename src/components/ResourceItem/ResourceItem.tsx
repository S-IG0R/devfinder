import { useEffect, type ReactNode } from 'react';
import styles from './ResourceItem.module.scss';
import useTypeText from '../../hooks/useTypeText';
import Cursor from '../../components/Cursor/Cursor';

interface IResourceItem {
  children: ReactNode;
  text?: string | null;
  isLink?: boolean;
  isAnimate: boolean;
  next: () => void;
}

const ResourceItem = ({
  children,
  isLink,
  text,
  isAnimate,
  next,
}: IResourceItem) => {
  const link =
    isLink && text && text.startsWith('http://') ? text : `https://${text}`;

  const caption = text || 'Unavailable';

  const [typedText, isTypedTextDone] = useTypeText(caption, 40, isAnimate);

  useEffect(() => {
    if (!isTypedTextDone) return;
    next();
  }, [isTypedTextDone]);

  return (
    <div className={`${styles.info} ${text ? '' : styles.empty}`}>
      {typedText && children}
      {isLink && text ? (
        <a
          className={styles.link}
          href={link}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {typedText}
          {!isTypedTextDone && isAnimate && <Cursor cursorType="|" />}
        </a>
      ) : (
        <span>
          {typedText}
          {!isTypedTextDone && isAnimate && <Cursor cursorType="|" />}
        </span>
      )}
    </div>
  );
};

export default ResourceItem;
