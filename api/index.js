import "dotenv/config";
import { connectDB } from "./config/connectDB.js";
import { app } from "./app.js";

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`Server is running at port: ${PORT}`);
  await connectDB();
});
