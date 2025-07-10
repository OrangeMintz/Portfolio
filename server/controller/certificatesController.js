import Certificate from '../model/certificates.js'
import upload from "../middleware/multerCertificate.js";

const uploadImages = upload.single("certificate"); // middleware

const getCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.status(200).json(certificates);
    } catch (error) {
        console.log(error)
    }
}

const postCertificate = async (req, res) => {
    try {
        const certificate = req.file?.path;

        const newCertificate = new Certificate({
            ...req.body,
            preview: certificate,
            certificate,
        });

        const savedCertificate = await newCertificate.save();
        res.status(200).json(savedCertificate);
    } catch (error) {
        console.error("Error posting certificate:", error);
        res.status(500).json({ error: "Failed to post certificate" });
    }
};

const deleteCertificate = async (req, res) => {
    try {
        const deleteCertificate = await Certificate.findByIdAndDelete(req.params.id);
        res.status(200).json(`${deleteCertificate.event} Successfully Deleted`)
    } catch (error) {
        console.log(error)
    }
}


export { getCertificates, postCertificate, deleteCertificate, uploadImages }