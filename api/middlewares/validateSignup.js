import { errorHandler } from "../utils/error.js";
import { signupValidation } from "../validation/userValidation.js";

export const validateSignup = (req, res, next) => {
  try {
    signupValidation.parse(req.body);
    next();
  } catch (error) {
    next(errorHandler(400, error.errors[0].message)); // Pass the first validation error to error handler
  }
};
