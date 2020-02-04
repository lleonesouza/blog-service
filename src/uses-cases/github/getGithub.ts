interface github_user {
    login: string;
    id: string;
    avatar_url: string;
    html_url: string;
    repos_url: string;
    company: string;
    blog: string;
    email: string;
    bio: string;
    public_repos: number;
    public_gists: number;
    created_at: string;
    updated_at: string;
}

const makeGetGithub = (githubUrl:any) => {
    return async (github_nickanme:any) => {
        const github_url = githubUrl(github_nickanme)
        const res = await (await fetch(github_url)).json()
        const github_user: github_user = {
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
}


export default makeGetGithub