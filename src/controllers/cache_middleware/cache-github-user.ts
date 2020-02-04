const makeCreateUser = ({ getCachedUser }: any) => {
    return async (req: any, res: any, next: any) => {
      try {
        const stories = await getCachedUser();
        res.send(stories[0].html);
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export default makeCreateUser;
  