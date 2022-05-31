const Article=require('../model/article');

const getAllArticles=async (req,res)=>{
    try {
        const articles= await Article.find({})
        res.status(200).json({articles})
        //res.json("All articles init!")
    } catch (error) {
        res.status(500).json({msg:error})        
    }
    
}
const createArticle=async(req,res)=>{
    try {
        const newArticle= await Article.create(req.body)
        res.status(201).json({newArticle})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}
const getArticle=async (req,res)=>{
    try {
        const {id:articleID}=req.params
        const singleArticle= await Article.findOne({_id:articleID})
        if(!singleArticle){
            return res.status(404).json({msg:`No article with id : ${articleID}`})
        }
        res.status(200).json({singleArticle})
    } catch (error) {
        res.status(500).json({msg:error})        
    } 


    //res.json({id:req.params.id})
}
const updateArticle=async (req,res)=>{
    try {
        const {id:articleID}=req.params
        const updateArticle= await Article.findOneAndUpdate({_id:articleID}, req.body)
        if(!updateArticle){
            return res.status(404).json({msg:`No article with id : ${articleID}`})
        }
        res.status(200).json({updateArticle})
        
    } catch (error) {
        res.status(500).json({msg:error})        
    }
    //res.json(req.body)
}
const deleteArticle=async (req,res)=>{
    try {
        const {id:articleID}= req.params;
        const deleteArticle= await Article.findByIdAndDelete({_id:articleID})

        if(!deleteArticle){
            return res.status(404).json({msg:`No article with id : ${articleID}`})
        }
        res.status(200).json({deleteArticle})
    } catch (error) {
        res.status(500).json({msg:error})        
    }
    //res.json("Article Deleted!")
}


module.exports={
    getAllArticles, createArticle, getArticle, updateArticle, deleteArticle
}