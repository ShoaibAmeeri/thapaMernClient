require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth");
const contactRoute = require("./routes/contact")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


const app = express();
const cors = require("cors")

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/service", serviceRoute);

// connectDb().then(() => {
//   app.use(errorMiddleware);

//   const PORT = 8000;
//   app.listen(PORT, (req, res) => {
//     console.log("your sever is now live on PORT", PORT);
//   });
// });


try {
  
connectDb()
  
  const port = process.env.PORT || 8000;
  const server = process.env.HOST || "localhost";
  
  app.get("/", (req, res) => {
    console.log("Connection successfull");
    res
    .status(200)
    .json({ message: "the connection is established and work properly" });
  });
  
  app.listen(port, server, () => {
    console.log(`server is listening on http://${server}:${port}`);
  });
} catch (error) {
 console.log(error.message) 
}

  