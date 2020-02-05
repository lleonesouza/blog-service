export default async (github_url:any) => {
    const res = await (await fetch(github_url)).json()
    const github_user:any = {
        login: res.login,
        id: res.id,
        avatar_url: res.avatar_url,
        html_url: res.html_url,
        repos_url: res.repos_url,
        company: res.company,
        blog: res.blog,
        email: res.email,
        bio: res.bio,
        created_at: res.created_at,
        updated_at: res.updated_at,
        public_repos: res.public_repos,
        public_gists: res.public_gists
    }
    return github_user
}