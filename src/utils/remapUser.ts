import type { GH_LocalUser, GH_User } from '../types';

export const remapUser = (user: GH_User): GH_LocalUser => {

  console.log(user);
  return {
    login: user?.login,
    id: user?.id,
    avatar: user?.avatar_url,
    url: user?.url,
    name: user?.name,
    company: user?.company,
    blog: user?.blog,
    location: user?.location,
    bio: user?.bio,
    twitter: user?.twitter_username,
    repos: user?.public_repos,
    followers: user?.followers,
    following: user?.following,
    created: user?.created_at,
  };
};
