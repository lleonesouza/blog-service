"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      git_id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: {
        type: Sequelize.INTERGER,
        allowNull: false
      },
      email: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      repos_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      html_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      blogUrl: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      about: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: true
      },
      create_at: {
        type: Sequelize.INTERGER,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.INTERGER,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users", {
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      git_id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.INTERGER,
        allowNull: false
      },
      email: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      repos_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      html_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      blogUrl: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      about: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      create_at: {
        type: Sequelize.INTERGER,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.INTERGER,
        allowNull: false
      }
    });
  }
};
