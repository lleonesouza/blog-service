import makeUserDb from "./users";
import makeProjectDb from "./projects";
import { Users, Projects } from "../db/sequelize/index";
import initRedis from "../db/redis/index";

const { medium, repos, user } = initRedis();

const {
  createUser,
  findUsername,
  insertBlogUrlById,
  insertAbout,
  getUsers,
  getCachedUser,
  insertCachedUser,
  deleteUser
} = makeUserDb({ Users, user });

const {
  createProject,
  deleteProject,
  findProjectById,
  getProjects,
  updateProject
} = makeProjectDb({ Projects });

export default Object.freeze({
  createUser,
  findUsername,
  insertBlogUrlById,
  insertAbout,
  getUsers,
  getCachedUser,
  insertCachedUser,
  deleteUser
});

export {
  createUser,
  findUsername,
  insertBlogUrlById,
  insertAbout,
  getUsers,
  getCachedUser,
  insertCachedUser,
  deleteUser
};
