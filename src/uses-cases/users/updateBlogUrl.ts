import {buildUser} from '../../entities/index'
const updateBlogUrl = ({UserDB}:any) => {
    return (user_id:any) => {
        const deleted = UserDB.update({where: user_id})
        return deleted
    }
}

export default updateBlogUrl