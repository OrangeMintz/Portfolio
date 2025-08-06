import express from 'express'
import { deleteMail, getMails, postMail } from '../controller/mailController.js'

const router = express.Router()

const mail = process.env.MAIL

router.get(`/${mail}`, getMails);

router.post(`/${mail}`, postMail);

router.delete(`/${mail}:id`, deleteMail)

export default router