import express from 'express'
import { deletePost, getPost, postPost, updatePost } from '../controller/postController.js'
const router = express.Router()

router.get('/', getPost);

router.post('/', postPost);

router.delete('/:id', deletePost)

router.put('/:id', updatePost)

export default router