const Contact = require("../models/contact-model")




const contactForm = async (req, res) => {
    try {
       const response = req.body
       console.log(response)
       await Contact.create(response)
       return res.status(200).json({message : "message send successfully" , response})
    } catch (error) {
        res.status(500).json({err : error.message , msg: "message not delivered"})
    }

}

module.exports = contactForm