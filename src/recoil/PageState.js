import {atom, selector} from "recoil"


// 스테이트 역할 : 페이지 변경
// default : home /logIn /idFind /pwFind / signUp / item / achivement
// 사용하는 컴포넌트 : Login.js / SignUp.js
export const whichPageState = atom({
    "key" : "whichPageState",
    "default": "logIn",
})