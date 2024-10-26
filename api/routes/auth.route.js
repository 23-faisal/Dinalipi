import { Router } from "express";
import { SignUpController } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/signup", SignUpController);
