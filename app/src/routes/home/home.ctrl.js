"use strict";

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        if (useScrollTrigger.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success: false,
            msg : "로그인에 실패하셨습니다.",
        })
    },
};

//꼭 밖으로 내보내야 밖에서 사용할 수 있음
module.exports = {
    output,
    process
};

