const ipRegex = require("ip-regex") ;
import sanitizeHtml from "sanitize-html";

import validateUser from './user/user'
import validadeProject from './project/projects'

import buildMakeUser from "./user/user";
import buildMakeSource from "./ip/source";
import buildMakeProject from './project/projects'
import Id from "../Id/index";
import crypto from 'crypto'

const isValidIp = (ip:any) => {
  return ipRegex({ exact: true }).test(ip);
};

const sanitizeUser = (user:any) => {
  validateUser(user)
  // TODO: allow more coding embeds
  return sanitizeHtml(user, {
    allowedIframeHostnames: ["codesandbox.io", "repl.it"]
  });
};

const sanitizeProjects = (project:any) => {
  validadeProject(project)
}

const md5 = (data:any) => {
  return crypto
    .createHash("md5")
    .update(data, "utf8")
    .digest("hex");
};

const makeSource = buildMakeSource({ isValidIp });
const makeProject = buildMakeProject({ Id, md5, sanitizeUser, makeSource });
const makeUser = buildMakeUser({ Id, md5, sanitizeProjects, makeSource });

export {makeSource, makeProject, makeUser};
