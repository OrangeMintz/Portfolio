import Project from '../model/projects.js'

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        console.log(error);
    }
}

const postProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save()
        res.status(200).json(savedProject)
    } catch (error) {
        console.log(error)
    }
}

const deleteProject = async (req, res) => {
    try {
        const deleteProject = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(`${deleteProject.name} Successfully Deleted`)
    } catch (error) {
        console.log(error)
    }
}

const updateProject = async (req, res) => {
    try {
        const updateProject = await Project.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(`${updateProject.name} Successfully Updated`);
    } catch (error) {
        console.log(error)
    }
}

export { getProjects, postProject, deleteProject, updateProject }