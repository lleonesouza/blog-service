const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize:any) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "field shloud not be empty"
          },
          len: {
            args: [4, 20],
            msg: "field should have more than 4 and less 20 caracteres"
          }
        }
      },
      email: DataTypes.STRING,
      organization: DataTypes.STRING,
      pagar_me: DataTypes.STRING,
      users: DataTypes.STRING,
      watson: DataTypes.STRING,
      gcloud: DataTypes.STRING,
      photo: DataTypes.STRING,
      nationality: DataTypes.STRING,
      birthday: DataTypes.STRING,
      projects_id: DataTypes.STRING,
      repositories_id: DataTypes.STRING,
      medium_id: DataTypes.STRING,
    }, { sequelize })
  }

  static associate(models:any) {
    this.hasMany(models.Project, { foreignKey: 'user_id', as: 'addresses' });
  }

}

export default User;
