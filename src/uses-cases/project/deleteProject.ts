const makeDeleteProject = ({projectDb}:any) => {
    return (data:any) => {
        const registered_project = projectDb.findOrCreate(data)
        return registered_project
    }
}

export default makeDeleteProject