const mongoose = require("mongoose");
require('dotenv').config();

const connectDB=(url)=>{
    return mongoose.connect(process.env.URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}


/*
const connectDB=mongoose.connect(process.env.URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connect(process.env.URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
  .then(() => console.log("Successfully connected to the Database!"))
  .catch((err) => console.log(err));
*/

module.exports=connectDB;