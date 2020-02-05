const makeGetProject = ({projectDb}:any) => {
    return (data:any) => {
        const registered_project = projectDb.findById(data)
        return registered_project
    }
}

export default makeGetProject