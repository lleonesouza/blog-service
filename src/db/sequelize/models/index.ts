import User from "./Users";
import Project from "./Projects";


const makeModelsInit = (sequelize: any) => {
  User.init(sequelize)
  Project.init(sequelize);
  
  User.associate(sequelize.models)
  Project.associate(sequelize.models)

  return { User, Project }
};

export default makeModelsInit;
