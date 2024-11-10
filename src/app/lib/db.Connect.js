import mongoose from "mongoose";

async function connectDB() {
  let isConnected = false;
  if (isConnected) return "DB is already Connected";
  try {
    let connected = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is Connected");

    if (connected.connection.readyState == 1) {
      isConnected = true;
    }
  } catch (error) {
    console.log("🚀 ~ connectDB ~ error:", error);
  }
}

export default connectDB;
