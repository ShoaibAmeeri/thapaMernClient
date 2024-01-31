 const express = require('express')
 const router = express.Router()


router.route("/").get((req,res) => {
    res
    .status(200)
    .send("hey this is prefered home page route")
})

router.route("/register").get((req,res) => {
    res
    .status(200)
    .send("hey this is registration page")
})

// router.route('register').get((req, res) => {
//     res.status(200).send("hy now you are in registeration page using router")
// })
module.exports=router