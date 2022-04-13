// Require mongoose
const mongoose = require("mongoose");
//Require dotenv file
require("dotenv").config();
const { MONGO_URI } = process.env;

// Async mongoose connection using async await
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection Established...");

    // Seed Data
  } catch (error) {
    console.error(error.message);

    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
