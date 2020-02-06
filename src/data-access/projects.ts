const makeUserDb = ({ seqDb, redisDb }: any) => {
  const findProjectById = async (id: any, blogUrl: string) => {
    const user = await seqDb.find(
      { raw: true },
      { where: { id: id } }
    );
  };

  const updateProject = async (id: any, blogUrl: string) => {
    const user = await seqDb.update(
      { blogUrl: blogUrl },
      { where: { id: id } }
    );
  };

  const getProjects = () => {
    return seqDb.findAll({ raw: true }).then((users: any) => {
      return users;
    });
  };

  const deleteProject = (user_id: any) => {
    seqDb.destroy(user_id).then((user: any) => {
      console.log(user);
    });
  };

  const createProject = (user: any) => {
    seqDb.create(user).then((user: any) => {
      console.log(user);
    });
  };


  return Object.freeze({
    createProject,
    findProjectById,
    getProjects,
    deleteProject,
    updateProject
  });
};

export default makeUserDb;
