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
      github_avatar_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      company: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      blog: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      public_repos: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      public_gists: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      bio: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      blog: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      git_create_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      git_updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      create_at: {
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
      github_avatar_url: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      company: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      blog: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      public_repos: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      public_gists: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      bio: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      blog: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  }
};
