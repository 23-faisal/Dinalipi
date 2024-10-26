import mongoose from "mongoose";
import "dotenv/config";

const mongodbUri = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongodbUri);
    console.log(`MongoDB connected!!!`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};
