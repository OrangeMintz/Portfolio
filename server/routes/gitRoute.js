import express from 'express';
import { getTopLanguages } from '../controller/githubController.js';

const router = express.Router();

const github = process.env.GITHUB;

router.get(`/${github}:username`, getTopLanguages);

export default router;