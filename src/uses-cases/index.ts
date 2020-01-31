import { makeSource, makeUser, makeProject } from "../entities/index";
import {UserDB, ProjectDB} from '../db/index'

import {makeGetUser} from "./users/index";
import {makeCreateUser} from "./users/index";
import {makeDeleteUser} from "./users/index";
import {makeUpdateUser} from "./users/index";
import {makeGetUsers} from './users/index'

import {makeGetProject} from "./project/index";
import {makeGetProjects} from "./project/index";
import {makeCreateProject} from "./project/index";
import {makeDeleteProject} from "./project/index";
import {makeUpdateProject} from "./project/index";


import makeGetStories from "./medium/getStories";
import makeGetGithub from "./github/getGithub";
import makeGetRepositories from "./github/getRepositories";

const axios = require("axios");

const USER = "lleonesouza";
const MEDIUM_URL = `https://medium.com/feed/@${USER}`;
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_URL}`;
const GITHUB_URL = `https://api.github.com/users/${USER}`;
const GITHUB_REPOSITORIES_URL = `https://api.github.com/users/${USER}`;


// User
const createUser = makeCreateUser({makeUser, makeSource, UserDB});
const updateUser = makeUpdateUser({makeUser, makeSource, UserDB});
const deleteUser = makeDeleteUser({makeUser, makeSource, UserDB});
const getUser = makeGetUser({makeUser, makeSource, UserDB});
const getUsers = makeGetUsers({makeUser, makeSource, UserDB});

// Projects
const createProject = makeCreateProject({makeProject, makeSource, ProjectDB});
const updateProject = makeUpdateProject({makeProject, makeSource, ProjectDB});
const deleteProject = makeDeleteProject({makeProject, makeSource, ProjectDB});
const getProject = makeGetProject({makeProject, ProjectDB});
const getProjects = makeGetProjects({makeProject, ProjectDB});

// Resources
const getStories = makeGetStories(axios, RSS2JSON_URL);
const getGithub = makeGetGithub(axios, GITHUB_URL);
const getRepositories = makeGetRepositories(axios, GITHUB_REPOSITORIES_URL);

const index = Object.freeze({
  getStories,
  getGithub,
  getRepositories,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjects
});

export default index;

export {
  getStories,
  getGithub,
  getRepositories,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjects
};
