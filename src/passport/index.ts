import makePassportInit from "./passportInit";
import {oauthUser} from "../controllers/index";
import strategy from "../controllers/passport/strategy";
import cookieExtractor from './cookieExtractor'

const passportInit = makePassportInit({strategy, oauthUser, cookieExtractor})

export default passportInit
