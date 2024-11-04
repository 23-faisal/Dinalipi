import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";
import { authRouter } from "./routes/auth.route.js";
import bodyParser from "body-parser";

export const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Use body-parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// user

app.use("/api/user", userRouter);

// authentication

app.use("/api/auth", authRouter);

// middleware

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    message,
  });
});
