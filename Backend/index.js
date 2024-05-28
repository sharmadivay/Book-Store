import express from "express";
import mongoose from "mongoose";
const app = express() ;
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";
const port =  5000;

app.use(cors());
app.use(express.json())

// connect to mongodb
const MONGO_URL = "mongodb://127.0.0.1:27017/bookstore";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.use("/book",bookRoute);
app.use("/user",userRoute);
app.listen(port ,()=>{
    console.log(   `app is listening ${port} `);
})