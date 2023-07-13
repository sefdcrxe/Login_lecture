"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//api 달아줘야함
router.get("/", ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register); 
//처리 
router.post('/login', ctrl.process.login);

module.exports = router;