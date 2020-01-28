import makeGetStories from "./medium/getStories";
import makeGetGithub from "./github/getGithub";
import makeGetRepositories from "./github/getRepositories";

const axios = require("axios");

const USER = "lleonesouza";
const MEDIUM_URL = `https://medium.com/feed/@${USER}`;
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_URL}`;
const GITHUB_URL = `https://api.github.com/users/${USER}`;
const GITHUB_REPOSITORIES_URL = `https://api.github.com/users/${USER}`;

const getStories = makeGetStories(axios, RSS2JSON_URL);
const getGithub = makeGetGithub(axios, GITHUB_URL);
const getRepositories = makeGetRepositories(axios, GITHUB_REPOSITORIES_URL);

const index = Object.freeze({ getStories, getGithub, getRepositories });

export default index;

export { getStories, getGithub, getRepositories };
