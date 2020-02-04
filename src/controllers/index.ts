import {
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
} from "../uses-cases/index";

import makeOauthStrategy from "./passport/strategy";

import makeLogin from "./oauth/login";
import makeLogout from "./oauth/logout";

import makeOauthPassport from "./passport/oauthPassport";
import makeUpdateUser from "./user/update-user";
import makeDelUser from "./user/delete-user";
import makeGetUser from "./user/get-user";
import makeGetUsers from "./user/get-users";

import makeCreateProject from "./project/create-project";
import makeUpdateProject from "./project/update-project";
import makeDelProject from "./project/delete-project";
import makeGetProject from "./project/get-project";
import makeGetProjects from "./project/get-projects";

// Passport
const oauthUser = makeOauthPassport({ create_user, get_user });
const strategy = makeOauthStrategy();

// Express Route
const updateUser = makeUpdateUser({
  update_user,
  get_medium_stories,
  get_github_user,
  get_github_repos
});
const delUser = makeDelUser({ delete_user });
const getUser = makeGetUser({ get_user });
const getUsers = makeGetUsers({ get_users });

const createProject = makeCreateProject({ create_project });
const updateProject = makeUpdateProject({ update_project });
const delProject = makeDelProject({ delete_project });
const getProject = makeGetProject({ get_project });
const getProjects = makeGetProjects({ get_projects });

const login = makeLogin({});
const logout = makeLogout();


// Redis Middleware
const cacheUser = ''
const cacheProjects = ''
const cacheRepos = ''
const cacheGithubUser = ''
const cacheMedium = ''
const getRepos = ''
const getGithubUser = ''
const getMedium = ''

const index = Object.freeze({
    // Oauth
  login,
  logout,
  strategy,
  oauthUser,

  // User
  updateUser,
  delUser,
  getUser,
  getUsers,
  cacheUser,

  // Projects
  createProject,
  updateProject,
  delProject,
  getProject,
  getProjects,
  cacheProjects,

  // Github
  getRepos,
  cacheRepos,
  getGithubUser,
  cacheGithubUser,

  // Medium
  getMedium,
  cacheMedium
});

export default index;
export {
    // Oauth
    login,
    logout,
    strategy,
    oauthUser,
  
    // User
    updateUser,
    delUser,
    getUser,
    getUsers,
  
    // Projects
    createProject,
    updateProject,
    delProject,
    getProject,
    getProjects
  };
