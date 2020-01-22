
import {getStories} from '../uses-cases/index'

import makeGetMediumStores from './medium-posts'


const getMediumStores = makeGetMediumStores({getStories})


export default getMediumStores
export {getMediumStores}