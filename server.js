require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth");
const contactRoute = require("./routes/contact")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

connectDb().then(() => {
  app.use(errorMiddleware);

  const PORT = 8000;
  app.listen(PORT, (req, res) => {
    console.log("your sever is now live on PORT", PORT);
  });
});
