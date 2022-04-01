"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const root = (0, express_1.Router)();
root.get('/', (req, res) => {
    res.redirect('tasks');
});
exports.default = root;
