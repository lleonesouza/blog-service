import { postgree, redis } from "../db/index";
const { UserDB, ProjectDB } = postgree;

// Users
import makeCacheUser from "./users/cacheUser";
import makeCreateUser from "./users/createUser";
import makeDeleteUser from "./users/deleteUser";
import makeGetCachedUser from "./users/getCachedUser";
import makeGetUser from "./users/getUser";
import makeGetUsers from "./users/getUsers";
import makeUpdateAbout from "./users/updateAbout";
import makeUpdateBlogUrl from "./users/updateBlogUrl";

// Projects
import  makeCreateProject  from "./project/createProject";
import  makeDeleteProject  from "./project/deleteProject";
import  makeGetProject  from "./project/getProject";
import  makeGetProjects  from "./project/getProjects";
import  makeUpdateProject  from "./project/updateProject";

// User
const cacheUser = makeCacheUser({ UserDB });
const create_user = makeCreateUser({ UserDB });
const delete_user = makeDeleteUser({ UserDB });
const get_cachedUser = makeGetCachedUser({ UserDB });
const get_user = makeGetUser({ UserDB });
const get_users = makeGetUsers({ UserDB });
const update_about = makeUpdateAbout({ UserDB });
const update_blogUrl = makeUpdateBlogUrl({ UserDB });

// Projects
const create_project = makeCreateProject({ ProjectDB });
const update_project = makeUpdateProject({ ProjectDB });
const delete_project = makeDeleteProject({ ProjectDB });
const get_project = makeGetProject({ ProjectDB });
const get_projects = makeGetProjects({ ProjectDB });

const index = Object.freeze({
  cacheUser,
  create_user,
  delete_user,
  get_cachedUser,
  get_user,
  get_users,
  update_about,
  update_blogUrl,

  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
});

export default index;

export {
  cacheUser,
  create_user,
  delete_user,
  get_cachedUser,
  get_user,
  get_users,
  update_about,
  update_blogUrl,
  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
};
