import { Sequelize } from "sequelize";
import makeModelsInit, { Users, Projects } from "./models/index";
import makeQueries from "./makeQueries";

const sequelize = (config: any) => {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  sequelize
    .authenticate()
    .then(() => console.log("Data base connected"))
    .catch((err: any) => console.log(err));

  makeModelsInit(sequelize);
};

const UserDB = makeQueries(Users);
const ProjectDB = makeQueries(Projects);

export default sequelize;
export { UserDB, ProjectDB };
