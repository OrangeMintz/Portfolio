import express from 'express'
import dotenv from 'dotenv'

import { deleteProject, getProjects, postProject, updateProject } from '../controller/projectsController.js'
const router = express.Router()
dotenv.config();

const project = process.env.PROJECT

router.get(`/${project}`, getProjects);

router.post(`/${project}`, postProject);

router.delete(`/${project}:id`, deleteProject)

router.put(`/${project}:id`, updateProject)

export default router