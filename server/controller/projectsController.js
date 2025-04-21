import Project from '../model/projects.js'
import upload from "../middleware/multer.js";

const uploadImages = upload.array("image", 8); // middleware

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        console.log(error);
    }
}

const getProject = async (req, res) => {
    try {
        const projects = await Project.findById(req.params.id)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error);
    }
}

const postProject = async (req, res) => {
    try {
        const images = req.files.map((file) => file.path);

        const newProject = new Project({
            ...req.body,
            images,
        });

        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    } catch (error) {
        console.error("Error posting project:", error);
        res.status(500).json({ error: "Failed to post project" });
    }
};


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

export { getProjects, getProject, postProject, uploadImages, deleteProject, updateProject }