import makeUserDb from "./users";
import makeProjectDb from "./projects";
import initRedis from "../db/redis/index";
import sequelize from "../db/sequelize/index";
import config from "../config";
// const { medium, repos, user } = initRedis();
const { User, Project } = sequelize(config.sequelize.test);

const {
  createUser,
  findUsername,
  insertBlogUrlById,
  insertAbout,
  getUsers,
  getCachedUser,
  insertCachedUser,
  deleteUser
} = makeUserDb({ User });

const {
  createProject,
  deleteProject,
  findProjectById,
  getProjects,
  updateProject
} = makeProjectDb({ Project });

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
