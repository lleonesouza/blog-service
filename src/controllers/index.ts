// Passport
import makeOauthStrategy from "./passport/strategy";
import makeOauthPassport from "./passport/oauthPassport";

// App
import makeLogin from "./oauth/login";
import makeLogout from "./oauth/logout";

import makeUpdateUser from "./user/update-user";
import makeUpdateAbout from './user/update-about'
import makeUpdateBlogUrl from './user/update-blogUrl'
import makeDelUser from "./user/delete-user";
import makeGetUser from "./user/get-user";
import makeGetUsers from "./user/get-users";

import makeCreateProject from "./project/create-project";
import makeUpdateProject from "./project/update-project";
import makeDelProject from "./project/delete-project";
import makeGetProject from "./project/get-project";
import makeGetProjects from "./project/get-projects";

// Passport
const oauthUser = makeOauthPassport({});
const strategy = makeOauthStrategy();

// App
const cacheUser = makeUpdateUser({});
const delUser = makeDelUser({});
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

const index = Object.freeze({
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

export default index;
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
