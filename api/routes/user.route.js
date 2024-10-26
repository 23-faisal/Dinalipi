import { Router } from "express";
import { test } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/", test);
