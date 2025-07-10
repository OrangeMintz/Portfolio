import Project from '../model/projects.js'
import upload from "../middleware/multerProject.js";

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

const getProjectStatusCounts = async (req, res) => {
    try {
        const featuredCount = await Project.countDocuments({ status: "featured" });
        const finishedCount = await Project.countDocuments({ status: "finished" });
        const ongoingCount = await Project.countDocuments({ status: "ongoing" });
        const droppedCount = await Project.countDocuments({ status: "dropped" });

        res.status(200).json({
            featured: featuredCount,
            finished: finishedCount,
            ongoing: ongoingCount,
            dropped: droppedCount,
        });
    } catch (error) {
        console.error("Error fetching project counts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

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
        const deleteProject = await Project.findByIdAndDelete(req.params.id);
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

export { deleteProject, getProjects, getProject, getProjectStatusCounts, postProject, uploadImages, updateProject }