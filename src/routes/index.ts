import {
  getUser,
  login,
  updateAbout,
  updateBlogUrl,
  delUser,
  getUsers,

  createProject,
  getProject,
  getProjects,
  delProject,
  updateProject,
} from "../controllers/index";
import passport from "passport";

const oauth_options = { scope: ["user:email"], session: false };
const github2Oauth = passport.authenticate("githubtoken", oauth_options);

const makeRoutes = (router: any) => {
  // PUBLIC ROUTES
  router.get("/oauth/user", github2Oauth, login);
  // router.get("/users/:user_id", cacheUser, getUser);

  // PROTECTED ROUTES
  router.post("/:user_id/projects", createProject);
  router.get("/:user_id/projects/:project_id", getProject);
  router.get("/:user_id/projects", getProjects)
  router.put("/:user_id/projects/:project_id", updateProject);
  router.delete("/:user_id/projects/:project_id", delProject);

  router.delete("/:user_id/desctive", delUser);
  router.put("/:user_id/about", updateAbout);
  router.put("/:user_id/blog", updateBlogUrl);

  // ROOT ROUTES
  router.get("/users", getUser);
  router.get("/users", getUsers);
  return router;
};

export default makeRoutes;
