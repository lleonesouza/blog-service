const makeGetMediumStoriesHtml = ({ getStories }: any) => {
  return async (req: any, res: any, next: any) => {
    try {
      const stories = await getStories();
      res.send(stories[0].html);
    } catch (err) {
      console.log(err);
    }
  };
};

export default makeGetMediumStoriesHtml;
