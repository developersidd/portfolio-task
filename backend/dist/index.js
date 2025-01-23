"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./db/index"));
// configuration
const { PORT } = process.env;
// connect to DB and start server
(0, index_1.default)()
    .then(() => {
    // check if app is ready to run
    app_1.default.on("error", (error) => {
        console.log("Application isn't ready to run");
        throw error;
    });
    // start server
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
});
