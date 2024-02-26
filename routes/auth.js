const express = require("express");
const authController = require("../controllers/auth-controller");
const router = express.Router();
// const signupSchema = require("../validator/auth_validator")
// const validate = require("../middlewares/validate-middleware")

const authMiddleware = require("../middlewares/authMiddleware")

router.route("/").get(authController.home);
router
.route("/register")
.post(authController.register);
router.route("/login").post(authController.login);

router.route("/user").get( authMiddleware, authController.user)

module.exports = router;
