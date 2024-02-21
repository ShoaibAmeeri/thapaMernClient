const  mongoose = require("mongoose")

const URI = process.env.MONGODB_URI

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI)
        console.log("DataBase connect successfully")
    } catch (error) {
        console.error({ error: error.message})
        process.exit(0)
    }
}

module.exports = connectDb