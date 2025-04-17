import express from 'express'
import { deleteProject, getProjects, postProject, updateProject } from '../controller/projectsController.js'
const router = express.Router()

router.get('/', getProjects);

router.post('/', postProject);

router.delete('/:id', deleteProject)

router.put('/:id', updateProject)

export default router