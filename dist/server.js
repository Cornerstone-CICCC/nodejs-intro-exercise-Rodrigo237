"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((request, response) => {
    //home
    if (request.url === "/" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1>Home</h1>");
        return;
    }
    //About
    if (request.url === "/about" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1>About</h1>");
        return;
    }
    // my-account
    if (request.url === "/my-account" && request.method === "GET") {
        response.writeHead(403, { "Content-type": "text/plain" });
        response.end("You have no access to this page");
        return;
    }
    // Error/404
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end('Page not found');
    return;
});
const PORT = 3040;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
