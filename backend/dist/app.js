"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// import Routes
const dotenv_1 = __importDefault(require("dotenv"));
const project_routes_1 = __importDefault(require("./routes/project.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const ApiError_1 = __importDefault(require("./utils/ApiError"));
// App Initialization
const app = (0, express_1.default)();
// configure environment variables
dotenv_1.default.config({ path: "./.env" });
// Middlewares
app.use(express_1.default.json({ limit: "20kb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "20kb" }));
app.use(express_1.default.static("public"));
app.use((0, cors_1.default)({ credentials: true, origin: process.env.CORS_ORIGIN }));
app.use((0, cookie_parser_1.default)());
// routes
app.get("/", (req, res) => {
    res.send("Welcome to my Portfolio Task API");
});
app.use("/api/v1/users", user_routes_1.default);
app.use("/api/v1/projects", project_routes_1.default);
// 404 Error Handler
app.use((req, res, next) => {
    const error = new ApiError_1.default(404, "Page Not Found");
    next(error);
});
// Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    return res.status(statusCode).json(Object.assign(Object.assign({}, err), { message }));
});
exports.default = app;
