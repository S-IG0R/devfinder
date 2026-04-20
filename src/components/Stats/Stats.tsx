import styles from './Stats.module.scss';

import { type CSSProperties } from 'react';
import useAnimationOrder from '../../hooks/useAnimationOrder';

import StatsLabel from '../../components/StatsLabel/StatsLabel';
import StatsValue from '../../components/StatsValue/StatsValue';

export type StatsData = IData[];

interface IData {
  label: string;
  value: number;
}

interface IStats {
  data: StatsData;
  style?: CSSProperties;
  isAnimate: boolean;
  nextAnimation: () => void;
}

const Stats = ({ style, data, isAnimate, nextAnimation }: IStats) => {
  const orderArr = [
    'reposLabel',
    'reposValue',
    'followersLabel',
    'followersValue',
    'followingLabel',
    'followingValue',
  ];

  const order = isAnimate ? orderArr : [];

  const { currentAnimation, next } = useAnimationOrder(order);

  return (
    <ul style={style} className={styles.container}>
      {data.map((el, i) => (
        <li className={styles.items} key={i}>
          <StatsLabel
            label={el.label}
            isAnimate={
              `${el.label.toLocaleLowerCase()}Label` === currentAnimation
            }
            next={next}
          />
          <StatsValue
            value={el.value}
            isAnimate={
              `${el.label.toLocaleLowerCase()}Value` === currentAnimation
            }
            next={next}
            isLast={
              orderArr[orderArr.length - 1] ===
              `${el.label.toLocaleLowerCase()}Value`
            }
            nextAnimation={nextAnimation}
          />
        </li>
      ))}
    </ul>
  );
};

export default Stats;
