import validateUser from "./user/user-validation";
import makeBuildUser from "./user/index";
import Id from "./Id/index";

const buildProject = () => {
    return {}
}

const buildUser = makeBuildUser({ Id });

export { buildUser, buildProject };
