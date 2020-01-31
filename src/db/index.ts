import sequelize, { UserDB, ProjectDB } from "./sequelize/index";

const config = {};
sequelize(config);


export { UserDB, ProjectDB };
