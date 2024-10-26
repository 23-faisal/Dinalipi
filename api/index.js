import express from "express";
import "dotenv/config";
import { connectDB } from "./config/connectDB.js";

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`Server is running at port: ${PORT}`);
  await connectDB();
});
