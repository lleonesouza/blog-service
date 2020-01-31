import Users from "./Users";
import Projects from "./Projects";

const makeModelsInit = (sequelize: any) => {
  Users.init(sequelize);
  // Users.associate(sequelize.models)

  Projects.init(sequelize);
  // Projects.associate(sequelize.models)
};

export default makeModelsInit;
export { Users, Projects };
