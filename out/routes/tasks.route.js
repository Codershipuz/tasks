"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Tasks
router.get('/', (req, res) => {
    res.render('tasks');
});
router.post('/tasks', (req, res) => {
    let { userId, content } = req.body;
    res.redirect('tasks');
});
exports.default = router;
