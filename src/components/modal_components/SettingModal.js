// ===== import base =====
import React from "react"
import styled from "styled-components"
import {useRecoilValue, useSetRecoilState} from "recoil"

// ===== import component =====

// ===== import recoil =====
import { whichModalState } from "../../recoil/ModalState"

// ===== import style =====
import { Img, ImgBtn } from "../../styles/Img"
import { Div } from "../../styles/Div"
import { Button } from "../../styles/Button"

// ===== import style func =====
import { color } from "../../styles/style"


// ===== style =====

//  ===== component =====

const SettingModal = () =>{
    const setModalState = useSetRecoilState(whichModalState)
    return(
        <Div width="600px" height="260px">
            환경설정
            <Button onClick={()=>setModalState("deleteAccountModal")}>계정 삭제</Button>
            <Button onClick={()=>setModalState("developInfoModal")}>개발자 정보</Button>
            <Button>로그아웃</Button>
        </Div>
    )
}

export default SettingModal
