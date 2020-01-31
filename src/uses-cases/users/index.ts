import {makeUser} from '../../entities/index'

const makeGetUser = ({makeUser, makeSource, UserDB}:any) => {
    return (data:any) => {
        const user = makeUser(data)
        const registered_user = UserDB.findById(user)
        return registered_user
    }
}

const makeGetUsers = ({makeUser, makeSource, UserDB}:any) => {
    return (data:any) => {
        const user = makeUser(data)
        const registered_user = UserDB.findById(user)
        return registered_user
    }
}

const makeCreateUser = ({makeUser, makeSource, UserDB}:any) => {
    return (data:any) => {
        const user = makeUser(data)
        const registered_user = UserDB.findOrCreate(user)
        return registered_user
    }
}

const makeDeleteUser = ({makeUser, makeSource, UserDB}:any) => {
    return (data:any) => {
        const user = makeUser(data)
        const registered_user = UserDB.findOrCreate(user)
        return registered_user
    }
}
const makeUpdateUser = ({makeUser, makeSource, UserDB}:any) => {
    return (data:any) => {
        const user = makeUser(data)
        const registered_user = UserDB.update(user)
        return registered_user
    }
}

const user = Object.freeze({
    makeGetUsers,
    makeGetUser,
    makeCreateUser,
    makeDeleteUser,
    makeUpdateUser
})

export default user
export {
    makeGetUser,
    makeGetUsers,
    makeCreateUser,
    makeDeleteUser,
    makeUpdateUser
}