require("dotenv").config();
const express = require("express");
const router = require("./routes/auth");
const connectDb = require("./utils/db");

const app = express();
app.use(express.json())

app.use("/api/auth", router)

connectDb().then(()=>{

    const Port = 8000
    app.listen(Port, (req,res)=>{
        console.log("your sever is now live on port", Port)
    })
})