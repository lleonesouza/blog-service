import {buildUser} from '../../entities/index'

const makeCacheUser = ({findUserByUsername, insertCachedUser}:any) => {
    return async (username:any) => {
        const user = findUserByUsername(username)
        const User = buildUser(user)

        const redis_user = await insertCachedUser({
            github_id: User.getId(),
            username: User.getUsername(),
            email: User.getEmail(),
            user_info: User.getUserInfo(),
            urls: User.getUrls(),
            repos: User.getRepos(),
            stories: User.getMediumStories(),
            created_at: User.getCreatedAtGithub(),
        })

        return redis_user
    }
}

export default makeCacheUser