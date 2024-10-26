import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const SignUpController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Convert the user document to a plain object
    const user = newUser.toObject();

    // Remove the password field
    delete user.password;

    res.status(201).json({
      success: true,
      message: `${user.username} signed up successfully`,
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
