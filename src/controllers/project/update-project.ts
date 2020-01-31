const makeCreateUser = ({ createUser }: any) => {
    return async (req: any, res: any, next: any) => {
      try {
        const stories = await createUser();
        res.send(stories[0].html);
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export default makeCreateUser;
  