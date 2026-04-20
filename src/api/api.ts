import type { GH_Error, GH_User } from '../types';
import { isGitHubUser } from '../utils/types';

const BASE_URL = 'https://api.github.com/users/';

export default async function getUser(username: string) {
  const url = BASE_URL + username;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Something wrong');
  }
  const user = (await res.json()) as GH_User | GH_Error;

  
  if (isGitHubUser(user)) {
    return user;
  } else return null
}
