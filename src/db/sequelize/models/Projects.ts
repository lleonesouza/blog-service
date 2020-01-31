const { Model, DataTypes } = require('sequelize');

class Project extends Model {
  static init(sequelize:any) {
    super.init({
      customer_id: DataTypes.STRING,
      trasaction_id: DataTypes.STRING,
      shipping_id: DataTypes.STRING,
      document_id: DataTypes.STRING,
      antifraud_score:DataTypes.STRING,
      is_gift: DataTypes.BOOLEAN,
      payment_method: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      ip: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models:any) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Item )
  }
}

export default Project;