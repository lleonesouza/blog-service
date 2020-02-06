const makeUserDb = ({ seqDb, redisDb }: any) => {
  const insertAbout = (id: any, about: string) => {
    seqDb.update({ about: about }, { where: { id: id } });
  };

  const findUsername = (username: any) => {
    return seqDb.find({ where: username }, { raw: true }).then((user: any) => {
      return user;
    });
  };

  const insertBlogUrlById = async (id: any, blogUrl: string) => {
    const user = await seqDb.update(
      { blogUrl: blogUrl },
      { where: { id: id } }
    );
  };

  const getUsers = () => {
    return seqDb.findAll({ raw: true }).then((users: any) => {
      return users;
    });
  };

  const deleteUser = (user_id: any) => {
    seqDb.destroy(user_id).then((user: any) => {
      console.log(user);
    });
  };

  const createUser = (user: any) => {
    seqDb.create(user).then((user: any) => {
      console.log(user);
    });
  };
  const getCachedUser = () => {};

  const insertCachedUser = () => {};

  return Object.freeze({
    createUser,
    findUsername,
    insertBlogUrlById,
    insertAbout,
    getUsers,
    getCachedUser,
    insertCachedUser,
    deleteUser
  });
};

export default makeUserDb;
