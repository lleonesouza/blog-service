'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      git_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      repos_url: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      html_url: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      blog_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      about: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      git_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      url: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      repos_url: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      html_url: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      blog_url: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      about: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      created_at: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  }
};
