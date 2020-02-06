import {
  signToken,
  get_user,
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
const oauthUser = makeOauthPassport({ get_user, create_user });
const strategy = makeOauthStrategy();

// App
const cacheUser = makeDelUser({ get_cachedUser, cache_user });
const delUser = makeDelUser({ delete_user });
const getUser = makeGetUser({ get_user });
const getUsers = makeGetUsers({ get_users });
const updateAbout = makeUpdateAbout({ update_about });
const updateBlogUrl = makeUpdateBlogUrl({ update_blogUrl });

const createProject = makeCreateProject({ create_project });
const updateProject = makeUpdateProject({ update_project });
const delProject = makeDelProject({ delete_project });
const getProject = makeGetProject({ get_project });
const getProjects = makeGetProjects({ get_projects });

const login = makeLogin({signToken});
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
