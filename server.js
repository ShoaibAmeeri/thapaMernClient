const express = require("express");
const router = require("./routes/auth");

const app = express();


app.use("/", router)


const Port = 8000
app.listen(Port, (req,res)=>{
    console.log("your sever is now live on port", Port)
})