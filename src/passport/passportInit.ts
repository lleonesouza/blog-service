
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const GitHubStrategy = require('passport-github2')

const makePassportInit = ({ strategy, oauth, cookieExtractor }:any) => {
 return ({secret, config}:any) => {
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
        secretOrKey: secret,
        passReqToCallback: true
      },
      strategy
    )
  );

  passport.use(
    "githubtoken",
    new GitHubStrategy(
      {
        clientID: config.oauth.github.clientID,
        clientSecret: config.oauth.github.clientSecret,
        passReqToCallback: true
      },
      oauth
    )
  );
 }
};


export default makePassportInit