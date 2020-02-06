import { buildUser } from "../../entities/index";

const makeCreateUser = ({createUser}: any) => {
  return async (profile: any) => {
    
    const normalizedUser = {
      git_id: profile._json.id,
      username: profile._json.login,
      email: profile._json.email,
      url: profile._json.url,
      html_url: profile._json.html_url,
      repos_url: profile._json.repos_url
    };

    const user = buildUser(normalizedUser);

    const newUser = {
      git_id: user.getId(),
      username: user.getUsername(),
      email: user.getEmail(),
      about: null,
      blog_url: null,
      url: user.getUrl(),
      html_url: user.getHtmlUrl(),
      repos_url: user.getReposUrl()
    };
  
    const registered_user = await createUser(newUser);
  
    return registered_user;
  };
};

export default makeCreateUser;
