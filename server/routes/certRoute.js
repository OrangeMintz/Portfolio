import express from 'express';
import { getCertificates, postCertificate, updateCertificate, deleteCertificate, uploadImages } from '../controller/certificatesController.js';

const router = express.Router();

const certificate = process.env.CERTIFICATE;

router.get(`/${certificate}`, getCertificates);

router.post(`/${certificate}`, uploadImages, postCertificate);

router.put(`/${certificate}:id`, updateCertificate);

router.delete(`/${certificate}:id`, deleteCertificate);

export default router;