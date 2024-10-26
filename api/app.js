import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";

export const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json());

// user

app.use("/api/user", userRouter);

app.use("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
