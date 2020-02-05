import {buildUser} from '../../entities/index'
const updateAbout = ({UserDB}:any) => {
    return (user_id:any) => {
        const deleted = UserDB.update({where: user_id})
        return deleted
    }
}

export default updateAbout