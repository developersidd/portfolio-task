"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// API Response Class
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.success = statusCode < 400;
        this.message = message;
    }
}
exports.default = ApiResponse;
