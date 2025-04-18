import express from 'express'
import dotenv from 'dotenv'
import { deleteMail, getMails, postMail } from '../controller/mailController.js'
const router = express.Router()
dotenv.config();

const mail = process.env.MAIL

router.get(`/${mail}`, getMails);

router.post(`/${mail}`, postMail);

router.delete(`/${mail}:id`, deleteMail)

export default router