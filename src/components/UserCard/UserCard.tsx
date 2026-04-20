import styles from './UserCard.module.scss';

import type { GH_LocalUser } from 'types';
import { type CSSProperties } from 'react';

import Bio, { type IBio } from '../Bio/Bio';
import Stats, { type StatsData } from '../Stats/Stats';
import Title, { type ITitle } from '../Title/Title';
import Avatar, { type IAvatar } from '../Avatar/Avatar';
import Resources, { type IResources } from '../Resources/Resources';
import useAnimationOrder from '../../hooks/useAnimationOrder';

interface IUserCard extends GH_LocalUser {
  style?: CSSProperties;
}

const UserCard = (props: IUserCard) => {
  const { currentAnimation, next } = useAnimationOrder([
    'title',
    'bio',
    'stats',
    'resources',
  ]);

  const statsData: StatsData = [
    { label: 'Repos', value: Number(props.repos) },
    { label: 'Followers', value: Number(props.followers) },
    { label: 'Following', value: Number(props.following) },
  ];

  const titleData: ITitle = {
    login: props.login,
    name: props.name,
    created: props.created,
    next,
    isAnimate: currentAnimation === 'title',
  };

  const avatarData: IAvatar = {
    avatar: props.avatar,
    name: props.name,
  };

  const bioData: IBio = {
    bio: props.bio,
    next,
    isAnimate: currentAnimation === 'bio',
  };

  const resourcesData: IResources = {
    company: props.company,
    url: props.blog,
    twitter: props.twitter,
    location: props.location,
    next,
    isAnimate: currentAnimation === 'resources',
  };

  return (
    <div style={props.style} className={styles.card}>
      <Avatar {...avatarData} />
      <Title {...titleData} />
      <Bio {...bioData} />
      <Stats
        data={statsData}
        isAnimate={currentAnimation === 'stats'}
        nextAnimation={next}
      />
      <Resources {...resourcesData} />
    </div>
  );
};

export default UserCard;
