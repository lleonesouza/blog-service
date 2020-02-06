const makeDeleteUser = ({deleteUser}:any) => {
    return async (user_id:any) => {
        const deleted = await deleteUser(user_id)
        return deleted
    }
}

export default makeDeleteUser