const buildUser = ({ Id, fetchUser, fetchRepos, fetchStories }:any) => {

  const mediumUrl = (medium_user: any) => {
    const MEDIUM_URL = `https://medium.com/feed/@${medium_user}`;
    const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_URL}`;
    return RSS2JSON_URL;
  };
  
  
  return ({git_id, username, email, url, repos_url, html_url, created_at}:any) => {

    const id = Id.makeId()

    let isDesactive:any = null

    const deletedText = ".xX This user has been desactived Xx.";

      const blogUrl = mediumUrl(username)
    
    const user = Object.freeze({
      getId: () => id,
      getGitId: () => git_id,
      getUsername: () => username,
      getEmail: () => email,
      getMediumUrl: () => blogUrl,
      getUrl: () => url,
      getReposUrl: () => repos_url,
      getHtmlUrl: () => html_url,
      getCreatedAt: () => '',
      getUpdatedAt: () => '',
      getCreatedAtGithub: () => created_at,
      isDesactive: () => isDesactive === deletedText,
      deleteUser: () => {
        isDesactive = ".xX This user has been desactived Xx."
        return true
      },
      getUrls: () => '',
      getRepos: () => fetchRepos(repos_url),
      getMediumStories: () => fetchStories(blogUrl),
      getUserInfo: () => '',
      getGitUser: () => fetchUser(url),
      getAvatarUrl: () => '',
    })
    return user
  }
}

export default buildUser