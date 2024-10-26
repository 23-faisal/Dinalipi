import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";
import { authRouter } from "./routes/auth.route.js";
import bodyParser from "body-parser";

export const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent
  })
);

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// user

app.use("/api/user", userRouter);

// authentication

app.use("/api/auth", authRouter);

// test

app.use("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
