const makeGetUser = (getCachedUser:any) => {
    return async (username:any) => {
        const user = await getCachedUser(username)
        return user
    }
}

export default makeGetUser