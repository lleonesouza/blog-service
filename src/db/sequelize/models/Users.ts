const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize:any) {
    super.init({
      git_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   notEmpty:{
        //     msg: "field shloud not be empty"
        //   },
        //   len: {
        //     args: [4, 20],
        //     msg: "field should have more than 4 and less 20 caracteres"
        //   }
        // }
      },
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        // validate: {
        //   notEmpty:{
        //     msg: "field shloud not be empty"
        //   },
        //   len: {
        //     args: [4, 20],
        //     msg: "field should have more than 4 and less 20 caracteres"
        //   }
        // }
      },
      url: DataTypes.STRING,
      repos_url: DataTypes.STRING,
      html_url: DataTypes.STRING,
      blog_url: { type: DataTypes.STRING },
      about: DataTypes.STRING
    }, { sequelize })
  }

  static associate(models:any) {
    this.hasMany(models.Project, { foreignKey: 'user_id', as: 'projects' });
  }

}

export default User;
