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
const create_user = makeCreateUser({makeUser, makeSource, UserDB});
const update_user = makeUpdateUser({makeUser, makeSource, UserDB});
const delete_user = makeDeleteUser({makeUser, makeSource, UserDB});
const get_user = makeGetUser({makeUser, makeSource, UserDB});
const get_users = makeGetUsers({makeUser, makeSource, UserDB});

// Projects
const create_project = makeCreateProject({makeProject, makeSource, ProjectDB});
const update_project = makeUpdateProject({makeProject, makeSource, ProjectDB});
const delete_project = makeDeleteProject({makeProject, makeSource, ProjectDB});
const get_project = makeGetProject({makeProject, ProjectDB});
const get_projects = makeGetProjects({makeProject, ProjectDB});

// Resources
const get_medium_stories = makeGetStories(axios, RSS2JSON_URL);
const get_github_user = makeGetGithub(axios, GITHUB_URL);
const get_github_repos = makeGetRepositories(axios, GITHUB_REPOSITORIES_URL);

const index = Object.freeze({
  get_medium_stories,
  get_github_user,
  get_github_repos,
  create_user,
  update_user,
  delete_user,
  get_user,
  get_users,
  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
});

export default index;

export {
  get_medium_stories,
  get_github_user,
  get_github_repos,
  create_user,
  update_user,
  delete_user,
  get_user,
  get_users,
  create_project,
  update_project,
  delete_project,
  get_project,
  get_projects
};
