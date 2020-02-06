import {
  findUsername,
  getCachedUser,
  deleteUser,
  insertAbout,
  getUsers,
  insertBlogUrlById,
  insertCachedUser,
  createUser
} from "../data-access/index";

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
import makeCreateProject from "./project/createProject";
import makeDeleteProject from "./project/deleteProject";
import makeGetProject from "./project/getProject";
import makeGetProjects from "./project/getProjects";
import makeUpdateProject from "./project/updateProject";

// User
const cache_user = makeCacheUser({ findUsername, insertCachedUser });
const create_user = makeCreateUser({ createUser });
const delete_user = makeDeleteUser({ deleteUser });
const get_cachedUser = makeGetCachedUser({ getCachedUser });
const get_username = makeGetUser({ findUsername });
const get_users = makeGetUsers({ getUsers });
const update_about = makeUpdateAbout({ insertAbout });
const update_blogUrl = makeUpdateBlogUrl({ insertBlogUrlById });

// Projects
const create_project = makeCreateProject({  });
const update_project = makeUpdateProject({  });
const delete_project = makeDeleteProject({  });
const get_project = makeGetProject({  });
const get_projects = makeGetProjects({  });

const index = Object.freeze({
  cache_user,
  create_user,
  delete_user,
  get_cachedUser,
  get_username,
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
  cache_user,
  create_user,
  delete_user,
  get_cachedUser,
  get_username,
  get_users,
  update_about,
  update_blogUrl,
  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
};
