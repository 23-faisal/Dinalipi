import { Router } from "express";
import { SignUpController } from "../controllers/auth.controller.js";
import { validateSignup } from "../middlewares/validateSignup.js";

export const authRouter = Router();

authRouter.post("/signup", validateSignup, SignUpController);
