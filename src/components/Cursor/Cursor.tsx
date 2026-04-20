import styles from './Cursor.module.scss';

interface ICursor {
  cursorType: string;
}

const Cursor = ({ cursorType }: ICursor) => {
  return <span className={styles.cursor}>{cursorType}</span>;
};

export default Cursor;
