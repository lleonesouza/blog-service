import { makeSource, makeUser, makeProject } from "../entities/index";
import { postgree, redis } from "../db/index";
const { UserDB, ProjectDB } = postgree;

// User Postgree
import { makeGetUser } from "./users/index";
import { makeCreateUser } from "./users/index";
import { makeDeleteUser } from "./users/index";
import { makeUpdateUser } from "./users/index";
import { makeGetUsers } from "./users/index";

// Project Portgree
import { makeGetProject } from "./project/index";
import { makeGetProjects } from "./project/index";
import { makeCreateProject } from "./project/index";
import { makeDeleteProject } from "./project/index";
import { makeUpdateProject } from "./project/index";

// Resources
import makeGetStories from "./medium/getStories";
import makeGetGithub from "./github/getGithub";
import makeGetRepositories from "./github/getRepositories";

// Cache
import makeCacheMedium from "./redis_cache/cacheMedium";
import makeCacheProject from "./redis_cache/cacheProject";
import makeCacheRepo from "./redis_cache/cacheRepo";
import makeCacheUser from "./redis_cache/cacheUser";
import makeCacheUsers from "./redis_cache/cacheUsers";

import makeGetCachedMedium from "./redis_cache/getCachedMedium";
import makeGetCachedProjects from "./redis_cache/getCachedProjects";
import makeGetCachedRepo from "./redis_cache/getCachedRepo";
import makeGetCachedUser from "./redis_cache/getCachedUser";
import makeGetCachedUsers from "./redis_cache/getCachedUsers";

const axios = "";

const mediumUrl = (medium_user: any) => {
  const MEDIUM_URL = `https://medium.com/feed/@${medium_user}`;
  const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_URL}`;
  return RSS2JSON_URL;
};

const githubUrl = (github_user: any) => {
  const GITHUB_URL = `https://api.github.com/users/${github_user}`;
  const GITHUB_REPOSITORIES_URL = `https://api.github.com/users/${github_user}/repos`;
  return [GITHUB_URL, GITHUB_REPOSITORIES_URL];
};

// Redis Cache
const get_cached_medium = makeGetCachedMedium;
const cache_medium = makeCacheMedium;

const get_cached_projects = makeGetCachedProjects;
const cache_projects = makeCacheProject;

const get_cached_repo = makeGetCachedRepo;
const chace_repo = makeCacheRepo;

const get_cached_user = makeGetCachedUser;
const chace_user = makeCacheUser;

const get_cached_users = makeGetCachedUsers;
const chace_users = makeCacheUsers;

// User
const create_user = makeCreateUser({ makeUser, makeSource, UserDB });
const update_user = makeUpdateUser({ makeUser, makeSource, UserDB });
const delete_user = makeDeleteUser({ makeUser, makeSource, UserDB });
const get_user = makeGetUser({ makeUser, makeSource, UserDB });
const get_users = makeGetUsers({ makeUser, makeSource, UserDB });

// Projects
const create_project = makeCreateProject({
  makeProject,
  makeSource,
  ProjectDB
});
const update_project = makeUpdateProject({
  makeProject,
  makeSource,
  ProjectDB
});
const delete_project = makeDeleteProject({
  makeProject,
  makeSource,
  ProjectDB
});
const get_project = makeGetProject({ makeProject, ProjectDB });
const get_projects = makeGetProjects({ makeProject, ProjectDB });

// Resources
const get_medium_stories = makeGetStories(mediumUrl);
const get_github_user = makeGetGithub(githubUrl);
const get_github_repos = makeGetRepositories(githubUrl);

const index = Object.freeze({
  get_cached_medium,
  cache_medium,
  get_cached_projects,
  cache_projects,
  get_cached_repo,
  chace_repo,
  get_cached_user,
  chace_user,
  get_cached_users,
  chace_users,

  get_medium_stories,
  get_github_user,
  get_github_repos,
  create_user,
  update_user,
  delete_user,
  get_user,
  get_users,
  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
});

export default index;

export {
  get_cached_medium,
  cache_medium,
  get_cached_projects,
  cache_projects,
  get_cached_repo,
  chace_repo,
  get_cached_user,
  chace_user,
  get_cached_users,
  chace_users,
  get_medium_stories,
  get_github_user,
  get_github_repos,
  create_user,
  update_user,
  delete_user,
  get_user,
  get_users,
  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
};
