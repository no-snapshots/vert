"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVertDir = void 0;
const path_1 = __importDefault(require("path"));
const getVertDir = () => path_1.default.join(process.cwd(), '.vert');
exports.getVertDir = getVertDir;
