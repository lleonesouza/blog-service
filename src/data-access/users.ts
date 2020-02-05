import { postgree, redis } from "../db/index";
const { UserDB, ProjectDB } = postgree;

const { destroyById, findAll, findById, findOrCreate, updateById } = UserDB;
export default {
  createUser: () => {},

  insertBlogUrl: () => {},
  insertAbout: () => {},

  getUsers: () => {},

  getUser: () => {},

  getCachedUser: () => {},

  insertCachedUser: () => {},

  deleteUser: () => {}
};
