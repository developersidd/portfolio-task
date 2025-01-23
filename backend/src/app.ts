// Dependencies
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
// import Routes
import userRouter from "./routes/user.routes";
import ApiError from "./utils/ApiError";

// App Initialization
const app = express();

// Middlewares
app.use(express.json({ limit: "20kb" }));

app.use(express.urlencoded({ limit: "20kb" }));

app.use(express.static("public"));
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));
app.use(cookieParser());

// routes
app.use("/api/v1/users", userRouter);

// 404 Error Handler
app.use((req, res, next) => {
  const error = new ApiError(404, "Page Not Found");
  next(error);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  return res.status(statusCode).json({
    ...err,
    message,
  });
});

export default app;
