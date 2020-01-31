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
      bucket: DataTypes.STRING,
      store: DataTypes.STRING,
      auth: DataTypes.STRING,
      pagar_me: DataTypes.STRING,
      users: DataTypes.STRING,
      watson: DataTypes.STRING,
      gcloud: DataTypes.STRING,
      photo: DataTypes.STRING,
      nationality: DataTypes.STRING,
      birthday: DataTypes.STRING,
    }, { sequelize })
  }

  static associate(models:any) {
    this.hasMany(models.Orders, { foreignKey: 'user_id', as: 'addresses' });
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'techs' });
    this.hasMany(models.Item, { foreignKey: 'user_id', as: 'techs' });
    this.hasMany(models.Abandonment, { foreignKey: 'user_id', as: 'techs' });
    this.hasMany(models.Document, { foreignKey: 'user_id', as: 'techs' });
    this.hasMany(models.Ask, { foreignKey: 'user_id', as: 'techs' });
  }

}

export default User;
