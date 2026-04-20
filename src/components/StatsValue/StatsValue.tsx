import styles from './StatsValue.module.scss';
import useTypeText from '../../hooks/useTypeText';
import Cursor from '../../components/Cursor/Cursor';
import { useEffect } from 'react';

interface IStatsValue {
  value: string | number;
  isAnimate: boolean;
  next: () => void;
  isLast: boolean;
  nextAnimation: () => void;
}

const StatsValue = ({
  value,
  isAnimate,
  next,
  isLast,
  nextAnimation,
}: IStatsValue) => {

  const count = Number(value) >= 1000 ? '999+' : String(value)

  const [valueTyped, isDone] = useTypeText(count, 120, isAnimate);

  useEffect(() => {
    if (isDone) {
      next();
      if (isLast) {
        nextAnimation();
      }
    }
  }, [isDone]);

  return (
    <span className={styles.value}>
      {valueTyped}
      {!isDone && isAnimate && <Cursor cursorType="|" />}
    </span>
  );
};

export default StatsValue;
