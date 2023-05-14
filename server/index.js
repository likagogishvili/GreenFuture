require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./src/config/dbConfig");
const authRouter = require("./src/routes/auth")

app.use("/api/v1/auth",authRouter)
const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`========= Server is listening on port ${port} =========`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
