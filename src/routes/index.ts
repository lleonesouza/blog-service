import { getUser, login } from "../controllers/index";
import passport from "passport";

const oauth_options = { session: false };
const github2Oauth = passport.authenticate("githubtoken", oauth_options);

const makeRoutes = (router: any) => {
  router.post("/oauth/github", github2Oauth, login);
  router.get("/user/name", getUser);

  return router;
};

export default makeRoutes;
