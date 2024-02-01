const express = require("express");
const authControllers = require("../controllers/auth-controller");
const router = express.Router();
const signupSchema = require("../validator/auth_validator")
const validate = require("../middlewares/validate-middleware")


router.route("/").get(authControllers.home);

router
.route("/register")
.post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;
