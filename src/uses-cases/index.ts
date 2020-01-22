import makeGetStories from "./medium/getStories";
const axios = require('axios')

const MEDIUM_URL = "https://medium.com/feed/@lleonesouza";
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_URL}`

const getStories = makeGetStories(axios, {RSS2JSON_URL});

const index = Object.freeze({ getStories });

export default index;

export { getStories };
