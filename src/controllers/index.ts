import {
  get_username,
  create_user,
  cache_user,
  create_project,
  delete_project,
  delete_user,
  get_cachedUser,
  get_project,
  get_projects,
  get_users,
  update_about,
  update_blogUrl,
  update_project
} from "../uses-cases/index";

// Passport
import makeOauthStrategy from "./passport/strategy";
import makeOauthPassport from "./passport/oauthPassport";

// App
import makeLogin from "./oauth/login";
import makeLogout from "./oauth/logout";

import makeUpdateAbout from "./user/update-about";
import makeUpdateBlogUrl from "./user/update-blogUrl";
import makeDelUser from "./user/delete-user";
import makeGetUser from "./user/get-user";
import makeGetUsers from "./user/get-users";

import makeCreateProject from "./project/create-project";
import makeUpdateProject from "./project/update-project";
import makeDelProject from "./project/delete-project";
import makeGetProject from "./project/get-project";
import makeGetProjects from "./project/get-projects";

// Passport
const oauthUser = makeOauthPassport({get_username, create_user});
const strategy = makeOauthStrategy();

// App
const cacheUser = makeDelUser({get_cachedUser, cache_user});
const delUser = makeDelUser({delete_user});
const getUser = makeGetUser({});
const getUsers = makeGetUsers({});
const updateAbout = makeUpdateAbout({});
const updateBlogUrl = makeUpdateBlogUrl({});

const createProject = makeCreateProject({});
const updateProject = makeUpdateProject({});
const delProject = makeDelProject({});
const getProject = makeGetProject({});
const getProjects = makeGetProjects({});

const login = makeLogin({});
const logout = makeLogout();


export default Object.freeze({
  // Oauth
  login,
  logout,
  strategy,
  oauthUser,

  // User
  cacheUser,
  delUser,
  getUser,
  getUsers,
  updateAbout,
  updateBlogUrl,

  // Projects
  createProject,
  updateProject,
  delProject,
  getProject,
  getProjects
});
export {
  // Oauth
  login,
  logout,
  strategy,
  oauthUser,
  // User
  cacheUser,
  delUser,
  getUser,
  getUsers,
  updateAbout,
  updateBlogUrl,
  // Projects
  createProject,
  updateProject,
  delProject,
  getProject,
  getProjects
};
