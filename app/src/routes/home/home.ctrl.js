"use strict";

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        console.log(req.body);
    },
};

//꼭 밖으로 내보내야 밖에서 사용할 수 있음
module.exports = {
    output,
    process
};

