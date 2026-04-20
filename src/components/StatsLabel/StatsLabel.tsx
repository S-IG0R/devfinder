import styles from './StatsLabel.module.scss';
import useTypeText from '../../hooks/useTypeText';
import Cursor from '../../components/Cursor/Cursor';
import { useEffect } from 'react';

interface IStatsLabel {
  label: string;
  isAnimate: boolean;
  next: () => void;
}

const StatsLabel = ({ label, next, isAnimate }: IStatsLabel) => {
  const [labelTyped, isDone] = useTypeText(label, 40, isAnimate);

  useEffect(() => {
    if (!isDone) return;
    next();
  }, [isDone]);

  return (
    <p className={styles.label}>
      {labelTyped}
      {!isDone && isAnimate && <Cursor cursorType="|" />}
    </p>
  );
};

export default StatsLabel;
