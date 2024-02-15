require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth");
const contactRoute = require("./routes/contact")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


const app = express();
const cors = require("cors")

const corsOptions = {
  origin: 'http://localhost:5174',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

connectDb().then(() => {
  app.use(errorMiddleware);

  const PORT = 5000;
  app.listen(PORT, (req, res) => {
    console.log("your sever is now live on PORT", PORT);
  });
});
