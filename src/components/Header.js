// ===== import base =====
import React from "react"
import styled from "styled-components"

// ===== import style =====
import {Img} from "../styles/Img"
import {Div} from "../styles/Div"
import { P } from "../styles/P"

// ===== import style fun =====
import { color, fontWeight, fontSize } from "../styles/style"


//  ===== component =====

const Header_style = styled.header`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 100vw;
    position: fixed;
`
// 헤더 아이콘 크기가 너무크다고 생각 줄이는거 어떨지?
const Header = () =>{
    return(
        <Header_style>
            <Img src={`${process.env.PUBLIC_URL}/img_srcs/icons/headerLogoIcon.png`} height="64px" padding="10px"/>
                
            <Div height="84px" align_items="flex-end" padding="0 10px 0 0">
                <Div border={`3px solid ${color("grayscale6")}`} border_radius = "10px" height="44px" width="115px" justify_content = "space-around" margin="0 0 6px 0">
                    <Img src={`${process.env.PUBLIC_URL}/img_srcs/icons/severalCoinIcon.png`} width="40px"/>
                    <P font_weight="regular" font_size={fontSize("m")}>25</P>
                </Div>
                <Img src={`${process.env.PUBLIC_URL}/img_srcs/btns/settingBeforeBtnImg.png`} width="60px" padding="0 10px"/>
            </Div>
        </Header_style>        
    )
}

export default Header