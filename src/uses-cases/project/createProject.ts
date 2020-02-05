const makeCreateProject = ({projectDb, buildProject}:any) => {
    return (data:any) => {
        const project = buildProject(data)
        const registered_project = projectDb.findOrCreate(project)
        return registered_project
    }
}

export default makeCreateProject