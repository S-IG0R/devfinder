import styles from './Resources.module.scss';
import ResourceItem from '../../components/ResourceItem/ResourceItem';
import { type CSSProperties } from 'react';
import type { GH_LocalUser } from '../../types';

import { FaLink, FaSquareXTwitter, FaCity } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import useAnimationOrder from '../../hooks/useAnimationOrder';

export interface IResources extends Pick<
  GH_LocalUser,
  'company' | 'location' | 'twitter' | 'url'
> {
  style?: CSSProperties;
  next: () => void;
  isAnimate: boolean;
}

const Resources = ({
  style = {},
  company,
  location,
  twitter,
  url,
  isAnimate,
}: IResources) => {

  console.log(isAnimate);

  const order = ['location', 'url', 'twitter', 'company'];

  const animation = isAnimate ? order : [];

  const { currentAnimation, next } = useAnimationOrder(animation);

  const items = [
    {
      label: <IoLocationSharp className={styles.icon} />,
      text: location,
      isLink: false,
      name: 'location',
      next,
    },
    {
      label: <FaLink className={styles.icon} />,
      text: url,
      isLink: true,
      name: 'url',
      next
    },
    {
      label: <FaSquareXTwitter className={styles.icon} />,
      text: twitter,
      isLink: false,
      name: 'twitter',
      next
    },
    {
      label: <FaCity className={styles.icon} />,
      text: company,
      isLink: false,
      name: 'company',
      next
    },
  ];

  return (
    <ul style={style} className={styles.listInfoItems}>
      {items.map((el, i) => (
        <li key={i}>
          <ResourceItem {...el} isAnimate={currentAnimation === el.name}>
            {el.label}
          </ResourceItem>
        </li>
      ))}
    </ul>
  );
};

export default Resources;
