const home = async (req, res) => {
  try {
    res.status(200).send("hey this is prefered home page route");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("hey this is register page");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = {
  home,
  register,
};

// m/odule.exports = jo
