import {makeProject} from '../../entities/index'

const makeGetProject = ({userDb}:any) => {
    return (data:any) => {
        const project = makeProject(data)
        const registered_project = userDb.findById(project)
        return registered_project
    }
}

const makeGetProjects = ({userDb}:any) => {
    return (data:any) => {
        const project = makeProject(data)
        const registered_project = userDb.findById(project)
        return registered_project
    }
}

const makeCreateProject = ({userDb}:any) => {
    return (data:any) => {
        const project = makeProject(data)
        const registered_project = userDb.findOrCreate(project)
        return registered_project
    }
}

const makeDeleteProject = ({userDb}:any) => {
    return (data:any) => {
        const project = makeProject(data)
        const registered_project = userDb.findOrCreate(project)
        return registered_project
    }
}
const makeUpdateProject = ({userDb}:any) => {
    return (data:any) => {
        const project = makeProject(data)
        const registered_project = userDb.update(project)
        return registered_project
    }
}

const project = Object.freeze({
    makeGetProject,
    makeCreateProject,
    makeDeleteProject,
    makeUpdateProject
})

export default project
export {
    makeGetProjects,
    makeGetProject,
    makeCreateProject,
    makeDeleteProject,
    makeUpdateProject
}