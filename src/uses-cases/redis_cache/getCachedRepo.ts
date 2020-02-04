const cacheRepo = ({repo, getRepo}:any) => {
    repo.get('', (err:any, data:any) => {
        if(err) throw err
        if(data !== null){
            return data
        }else{
            const repo_url = getRepo('')
            const repos = fetch(repo_url)
            return repos
        }
    })
}

export default cacheRepo