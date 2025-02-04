import express from 'express'
import { deleteMail, getMails, postMail, updateMail } from '../controller/mailController.js'
const router = express.Router()

router.get('/', getMails);

router.post('/', postMail);

router.delete('/:id', deleteMail)

router.put('/:id', updateMail)

export default router