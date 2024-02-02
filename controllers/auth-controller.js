const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("hey this is prefered home page route");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "your are already have an accont" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      status: "data created successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(400).send({ msg: "page not found" });
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        status: "login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res
        .status(401)
        .json({ message: "invalid email or password please check" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);

    // next(error)
  }
};

module.exports = {
  home,
  register,
  login,
};

// m/odule.exports = jo
