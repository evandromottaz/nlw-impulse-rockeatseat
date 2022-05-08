"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // permitir o front-end com o back-end
app.use(express_1.default.json());
app.use(routes_1.routes);
const door = 3333;
app.listen(door, () => {
    console.log(`Server runing on ${door}...`);
});
