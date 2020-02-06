const makeUserDb = ({ User, redisDb }: any) => {
  const insertAbout = (id: any, about: string) => {
    User.update({ about: about }, { where: { id: id } });
  };

  const findUsername = async (username: any) => {
    try {
      const user = await User.findOne({ where: { username } });
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  const insertBlogUrlById = async (id: any, blogUrl: string) => {
    const user = await User.update({ blogUrl: blogUrl }, { where: { id: id } });
  };

  const getUsers = () => {
    return User.findAll({ raw: true }).then((User: any) => {
      return User;
    });
  };

  const deleteUser = (user_id: any) => {
    User.destroy(user_id).then((user: any) => {
      console.log(user);
    });
  };

  const createUser = async (newUser: any) => {
    const user = await User.create(newUser)
    console.log(user)
    return user
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
