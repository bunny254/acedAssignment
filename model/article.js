const mongoose=require('mongoose');

const ArticleSchema=new mongoose.Schema({
    articleID: {
        type:Number,
        required: [true, "Provide an ID you bloody!"]
    },
    title: {
        type:String,
        required:[true, "Must have a title"]
    },
    content: {
        type:String,
        required: [true,"Must have content"]
    }
})  

module.exports=mongoose.model('Article', ArticleSchema)