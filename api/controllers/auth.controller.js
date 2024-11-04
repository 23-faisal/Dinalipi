import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const SignUpController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields required!"));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "Email already registered!"));
    }

    const existedUsername = await User.findOne({ username });
    if (existedUsername) {
      return next(errorHandler(400, "Username already registered!"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: `signed up successful`,
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// sign in

export const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, "All fields required!"));
    }

    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User does not exists!"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400, "Opps! Wrong password."));
    }

    const token = jwt.sign(
      { id: validUser._id, email: validUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Sign in successful!",
      user: {
        id: validUser._id,
        email: validUser.email,
        username: validUser.username,
      },
    });
  } catch (error) {
    next(error);
  }
};
