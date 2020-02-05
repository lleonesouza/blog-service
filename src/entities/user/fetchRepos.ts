export default async (GITHUB_REPOSITORIES_URL:any) => {
    const res = await (await fetch(GITHUB_REPOSITORIES_URL)).json()
    const repos: repositorie[] = [];
    res.data.items.map((repo: any) => {
        repos.push({
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        html_url: repo.html_url,
        description: repo.description,
        forks_url: repo.forks_url,
        homepage: repo.homepage,
        size: repo.size,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        forks_count: repo.forks_count,
        mirror_url: repo.mirror_url,
        archived: repo.archived,
        disabled: repo.disabled,
        open_issues_count: repo.open_issues_count,
        license: repo.license,
        forks: repo.forks,
        open_issues: repo.open_issues,
        watchers: repo.watchers,
        default_branch: repo.default_branch,
        url: repo.url,
        teams_url: repo.teams_url,
        hooks_url: repo.hooks_url,
        tags_url: repo.tags_url,
        events_url: repo.events_url,
        languages_url: repo.languages_url,
        stargazers_url: repo.stargazers_url,
        merges_url: repo.merges_url,
        downloads_url: repo.downloads_url,
        deployments_url: repo.deployments_url,
        git_url: repo.git_url,
        ssh_url: repo.ssh_url,
        clone_url: repo.clone_url,
        svn_url: repo.svn_url
      });
    });
    return repos;
  };