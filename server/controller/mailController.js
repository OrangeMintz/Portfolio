import Mail from '../model/mail.js'

const getMails = async (req,res) =>{
    try{
        const mail = await Mail.find()
        res.status(200).json(mail)
    }catch(error){
        console.log(error);
    }
}

const postMail = async (req,res) =>{
    try{
        const newMail = new Mail(req.body);
        const savedMail = await newMail.save()
        res.status(200).json(savedMail)
    }catch(error){
        console.log(error)
    }
}

const deleteMail = async(req,res) =>{
    try{
        const deleteMail = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(`Successfully Deleted`)
    }catch(error){
        console.log(error)
    }
}

const updateMail = async(req,res) =>{
    try{
        const updateMail = await Mail.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(`Succesfully Updated`);
    }catch(error){
        console.log(error)
    }
}

export { getMails, postMail, deleteMail, updateMail }