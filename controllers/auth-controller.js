const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("hey this is prefered home page route");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      
      return res.status(400).json({ msg: "your are already have an accont" });
    } 
    const userCreated = await User.create({
        username,
        email,
        phone,
        password
      });
     res.status(200).send({
      status: "data created successfully",
      msg: userCreated,
    });
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = {
  home,
  register
};

// m/odule.exports = jo
