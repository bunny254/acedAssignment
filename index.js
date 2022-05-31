require('./db/dbConnect');
const express = require("express");
const app = express();
const routes = require('./routes/article');
const connectDB=require('./db/dbConnect');
const port = 3500;

//middleware
app.use(express.json())

app.get('/', (req,res)=>{
  res.json("Welcome to the Articles HomePage")
})

app.use('/api/articles',routes)



//start db
const start= async ()=>{
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
    
  } catch (error) {
    console.log(error);
  }
}

start()