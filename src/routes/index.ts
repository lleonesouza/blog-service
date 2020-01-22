
import {getMediumStores} from '../controllers/index'


const makeRoutes = (router:any) => {
    router.get("/stores", getMediumStores);

    return router
}

export default makeRoutes