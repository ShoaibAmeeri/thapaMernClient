const jwt = require("jsonwebtoken");
const User = require('../models/user-model')

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.this
      .status(401)
      .json({ message: "unauthorized HTTP, token is not provide" });
  }

  const jwtToken = token.split(" ")[1];
  console.log(jwtToken);

  try {
    const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({email:isVarified.email}).
    select({
      password : 0
    })

    console.log(userData);
    
    req.body=userData
    req.token = token
    req.userId = userData._id
    next();
  } catch (error) {
    return res.status(401).json({message: "Unauthorized. invalid token"})
  }
};

module.exports = authMiddleware;
