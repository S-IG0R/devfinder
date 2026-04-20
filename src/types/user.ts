export type GH_User = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: null | string;
  url: string;
  blog: string;
  location: null | string;
  bio: null | string;
  twitter_username: null | string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GH_LocalUser = {
  repos: number;
  avatar: string;
  created: string;
  twitter: null | string;
} & Omit<
  GH_User,
  'avatar_url' | 'public_repos' | 'created_at' | 'twitter_username'
>;

export type GH_Error = {
  message: string;
  documentation_url: string;
};
