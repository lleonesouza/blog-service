import Sequelize from "sequelize";
import makeModelsInit from "./models/index";


const sequelize = (sequelize_config: any) => {
  var connection = new Sequelize(
    sequelize_config.database,
    sequelize_config.username,
    sequelize_config.password,
    sequelize_config
  );


  connection
    .authenticate()
    .then(() => console.log("Data base connected"))
    .catch((err: any) => console.log(err));


  const {User,Project} = makeModelsInit(connection);
    

  return {User,Project}
};

export default sequelize;
