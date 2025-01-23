// Dependencies
import dotenv from "dotenv";
import app from "./app";
import connectDB from "./db/index";

// configuration
const { PORT } = process.env;

// connect to DB and start server
connectDB()
  .then(() => {
    // check if app is ready to run
    app.on("error", (error) => {
      console.log("Application isn't ready to run");
      throw error;
    });
    // start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.log("MongoDB connection failed !!!", err);
  });
