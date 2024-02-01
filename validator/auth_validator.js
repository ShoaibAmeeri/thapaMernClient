const z = require("zod");

// creating an object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 chracters" })
    .max(256, { message: "Name must not be more than 256 chracters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message: "invalid Email address"})
    .min(3, { message: "Email must be atleast 3 chracters" })
    .max(256, { message: "Email must not be more than 256 chracters" }),
  phone: z
    .string({ required_error: "Phone number  is required" })
    .trim()
    .min(10, { message: "phone number must be atleast 10 chracters" })
    .max(20, { message: "Phone must not be more than 20 chracters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be atleast 6 chracters" })
    .max(20, { message: "Password can't be greater than 20 chracters" }),
});

module.exports = signupSchema