const makeDeleteUser = ({UserDB}:any) => {
    return (user_id:any) => {
        const deleted = UserDB.delete({where: user_id})
        return deleted
    }
}

export default makeDeleteUser