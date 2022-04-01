"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Users
router.get('/', (req, res) => {
    res.render('users');
});
router.post('/', (req, res) => {
    const { name, surname } = req.body;
    res.redirect('users');
});
//Users id
router.get('/users/:id', (req, res) => {
    res.render('user-tasks');
});
exports.default = router;
