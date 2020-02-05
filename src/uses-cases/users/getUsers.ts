const makeGetUser = (UserDB:any) => {
    return async () => {
        const users = await UserDB.get()
        return users
    }
}

export default makeGetUser