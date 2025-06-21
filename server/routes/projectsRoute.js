import express from 'express'
import dotenv from 'dotenv'

import { deleteProject, getProject, getProjects, getProjectStatusCounts, postProject, uploadImages, updateProject } from '../controller/projectsController.js'
const router = express.Router()
dotenv.config();

const project = process.env.PROJECT

router.get(`/${project}`, getProjects);

router.get(`/${project}count`, getProjectStatusCounts);

router.get(`/${project}:id`, getProject);  // <-- correct

router.post(`/${project}`, uploadImages, postProject);

router.delete(`/${project}:id`, deleteProject);

router.put(`/${project}:id`, updateProject)

export default router