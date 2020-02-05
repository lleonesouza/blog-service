
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const GitHubStrategy = require('passport-github2')

const makePassportInit = ({ strategy, oauthUser, cookieExtractor }:any) => {
 return ({passport_secret, github_config}:any) => {
  passport.serializeUser(function(user:any, done:any) {
    done(null, user);
  });

  passport.deserializeUser(function(user:any, done:any) {
    done(null, user);
  });


  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: passport_secret,
        passReqToCallback: true
      },
      strategy
    )
  );

  passport.use(
    "githubtoken",
    new GitHubStrategy(
      {
        clientID: github_config.clientID,
        clientSecret: github_config.clientSecret,
        passReqToCallback: true
      },
      oauthUser
    )
  );
 }
};


export default makePassportInit