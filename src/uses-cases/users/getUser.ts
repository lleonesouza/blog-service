const makeGetUser = (findUsername:any) => {
    return async (username:any) => {
        const redis_user = await findUsername(username)
        return redis_user
    }
}

export default makeGetUser