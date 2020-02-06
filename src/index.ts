import express from "express";
import passport from "passport";
import makeRoutes from "./routes/index";
import initPassport from "./passport/index";
import config from './config'

const makeServer = () => {
  const passport_secret = config.oauth.secret
  const github_config = config.oauth.github

  const app = express();
  app.disable("x-powered-by");
  app.use(express.json());

  app.use(passport.initialize());
  initPassport({ passport_secret, github_config });

  const router = express.Router();
  const routes = makeRoutes(router);
  app.use("/", routes);

  return app;
};

export default makeServer;
