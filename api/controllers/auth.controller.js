import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

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
      message: ` signed up successful`,
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};
