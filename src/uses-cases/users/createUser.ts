import { buildUser } from "../../entities/index";

const makeCreateUser = (createUser: any) => {
  return async (profile: any) => {
    const normalizedUser = {
      git_id: profile._json.id,
      login: profile._json.login,
      email: profile._json.email,
      url: profile._json.url,
      html_url: profile._json.html_url,
      repos_url: profile._json.repos_url
    };

    const user = buildUser(normalizedUser);

    const registered_user = await createUser({
      id: user.getId(),
      git_id: user.getId(),
      login: user.getId(),
      email: user.getId(),
      about: null,
      blog_url: null,
      url: user.getId(),
      html_url: user.getId(),
      repos_url: user.getId(),
      created_at: user.getCreatedAt(),
      update_at: user.getUpdatedAt()
    });

    return registered_user;
  };
};

export default makeCreateUser;
