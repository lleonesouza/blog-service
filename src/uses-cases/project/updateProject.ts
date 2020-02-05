const makeUpdateProject = ({projectDb, buildProject}:any) => {
    return (data:any) => {
        const project = buildProject(data)
        const registered_project = projectDb.update(project)
        return registered_project
    }
}
export default makeUpdateProject