"use strict";


const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

//꼭 밖으로 내보내야 밖에서 사용할 수 있음
module.exports = {
    home,
    login
};

