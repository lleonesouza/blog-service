import Sequelize from "sequelize";
import makeModelsInit, { Users, Projects } from "./models/index";
import makeQueries from "./makeQueries";

const sequelize = (sequelize_config: any) => {
  var sequelize_connection = new Sequelize(
    sequelize_config.database,
    sequelize_config.username,
    sequelize_config.password,
    sequelize_config
  );

  sequelize_connection
    .authenticate()
    .then(() => console.log("Data base connected"))
    .catch((err: any) => console.log(err));

  makeModelsInit(sequelize_connection);
};

const UserDB = makeQueries(Users);
const ProjectDB = makeQueries(Projects);

export default sequelize;
export { UserDB, ProjectDB };
