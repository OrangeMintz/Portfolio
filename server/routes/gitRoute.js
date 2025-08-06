import express from 'express';
import dotenv from 'dotenv';
import { getTopLanguages } from '../controller/githubController.js';

dotenv.config();
const github = process.env.GITHUB;

const router = express.Router();

router.get(`/${github}:username`, getTopLanguages);

export default router;