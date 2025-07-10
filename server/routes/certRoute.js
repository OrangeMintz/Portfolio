import express from 'express';
import dotenv from 'dotenv'
import { getCertificates, postCertificate, deleteCertificate, uploadImages } from '../controller/certificatesController.js';
const router = express.Router();
dotenv.config();

const certificate = process.env.CERTIFICATE;

router.get(`/${certificate}`, getCertificates);

router.post(`/${certificate}`, uploadImages, postCertificate);

router.delete(`/${certificate}:id`, deleteCertificate);

export default router;