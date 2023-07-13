"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.ariaValueMax,
        psword : psword.ariaValueMax,
    };

    //로그인 api : /auth/signin
    //로그인 req 
    fetch("/auth/signin", {
        method : "POST",
        header : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                //성공 시, 루트 이동 경로 설정 !! 메인페이지 api 생성 시, 아래 창에 추가할 예정
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}