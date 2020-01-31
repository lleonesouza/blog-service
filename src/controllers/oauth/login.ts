const makeLogin = (signToken: any) => {
    return (req: any, res: any) => {
      const token = signToken(req.user);
      res.cookie("access_token", token, {
        httpOnly: true
      });
      res.send(req.user);
    };
  };

  export default makeLogin