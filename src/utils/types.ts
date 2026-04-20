import type { GH_User } from "../types";

export const isGitHubUser = (user: object): user is GH_User => 'id' in user