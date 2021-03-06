const makeOauthPassport = ({get_user, create_user}:any) => {
    return async (
      req: any,
      accessToken: any,
      refreshToken: any,
      profile: any,
      done: any
    ) => {
      try {
        const exists = await get_user(profile._json.login);
        if (exists) {
          done(null, exists);
        } else {
          const user = await create_user(profile);
          done(null, user);
        }
      } catch (error) {
        done(error, false, error.message);
      }
    };
  };

  export default makeOauthPassport