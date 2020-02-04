import { getUser, login, createProject } from "../controllers/index";
import passport from "passport";

const oauth_options = { session: false };
const github2Oauth = passport.authenticate("githubtoken", oauth_options);

const makeRoutes = (router: any) => {

  router.post("/oauth/user", github2Oauth, login);
  // router.get("/user/:user_id", cacheUser, getUser);
  // router.put("/user/:user_id", updateUser);
  // router.del("/user/:user_id", delUser);
  // router.get("/users", getUsers);

  // router.post("/:user_id/project/", createProject);
  // router.get("/:user_id/project/:project_id", cacheProjects, getProject);
  // router.get("/:user_id/projects", getProjects);
  // router.put("/:user_id/project", updateProject);
  // router.delete("/:user_id/project", delProject);

  // // Github
  // router.get("/:user_id/github", cacheGithub, getGitHub);

  // // Repos
  // router.get("/:user_id/repos", cacheRepos, getRepos);

  // // Medium
  // router.get("/:user_id/medium", cacheMedium, getMedium);

  return router;
};

export default makeRoutes;
