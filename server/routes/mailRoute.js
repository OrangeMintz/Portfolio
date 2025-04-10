import express from 'express'
import { deleteMail, getMails, postMail } from '../controller/mailController.js'
const router = express.Router()

router.get('/', getMails);

router.post('/', postMail);

router.delete('/:id', deleteMail)

export default router