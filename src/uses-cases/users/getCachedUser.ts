const makeGetUser = (UserDB:any) => {
    return async (username:any) => {
        const redis_user = await UserDB.get(username)
        return redis_user
    }
}

export default makeGetUser