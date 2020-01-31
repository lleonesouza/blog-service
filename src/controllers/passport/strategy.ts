let makeStrategy = () => {
  return async (req: any, profile: any, done: any) => {
    try {
      done(null, profile);
    } catch (error) {
      done(error, false);
    }
  };
};

export default makeStrategy;
