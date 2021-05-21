const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const index = require('./router/index')

const PORT = process.env.PORT || 3001
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://user:ayama654321@cluster0-yraqv.mongodb.net/pokemon?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error :"));
db.once("open", () => {
  console.log("connection succesfuly");
});

app.use('/',index)
app.get('/',(req,res)=>{
  res.send('APPLICATION RUNNING')
})
app.use((err,req,res,next)=>{
  console.log(err)
    if(err.name == 'ValidationError'){
        var Error=[]
        for (const error in err.errors){
            Error.push(err.errors[error].message)
        }
        res.status(400).send({"validation Error": Error })
    } else {
        res.status(500).json({ "message": "internal server error !"})
    }
})

app.listen(PORT, () => {
    console.log("listening to port 3000");
  });
  