import sequelize, { UserDB, ProjectDB } from "./sequelize/index";
import initRedis from './redis/index'

const postgree = { UserDB, ProjectDB }

const DBS = {

}

const redis = initRedis

export default sequelize
export { postgree, redis };
