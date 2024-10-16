import Post from '../model/post.js'

const getPost = async (req,res) =>{
    try{
        const post = await Post.find()
        res.status(200).json(post)
    }catch(error){
        console.log(error);
    }
}

const postPost = async (req,res) =>{
    try{
        const newPost = new Post(req.body);
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(error){
        console.log(error)
    }
}

const deletePost = async(req,res) =>{
    try{
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(`Successfully deleted ${deletePost.title}`)
    }catch(error){
        console.log(error)
    }
}

const updatePost = async(req,res) =>{
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(`Succesfully updated ${updatePost.title}`);
    }catch(error){
        console.log(error)
    }
}

export { getPost, postPost, deletePost, updatePost }