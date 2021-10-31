"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("./router/test"));
var http_1 = require("http");
var port = Number(process.env.PORT) || 5000;
var server = (0, http_1.createServer)(test_1.default);
server.listen(port, function () {
    console.log(port + "\uD3EC\uD2B8 \uC11C\uBC84 \uB300\uAE30 \uC911!");
});
exports.default = server;
