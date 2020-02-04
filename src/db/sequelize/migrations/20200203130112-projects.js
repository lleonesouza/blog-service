"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("projects", {
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      git_hub_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      medium_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      description: {
        type: Sequelize.INTERGER,
        allowNull: false
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users", {});
  }
};
