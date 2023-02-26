// ===== import base =====
import React from "react"
import styled from "styled-components"
import {useRecoilValue, useSetRecoilState} from "recoil"

// ===== import component =====

// ===== import recoil =====
import { whichPageState } from "../../recoil/PageState"

// ===== import style =====
import { Img, ImgBtn } from "../../styles/Img"
import { Div ,ShadowDiv} from "../../styles/Div"
import { Button } from "../../styles/Button"
import { H1 } from "../../styles/H1"
import { P } from "../../styles/P"

// ===== import style func =====
import { color } from "../../styles/style"


// ===== style =====

//  ===== component =====

const GameOverModal = () =>{
    return(
        <Div width="560px" height="500px" flex_direction="column" justify_content="space-between" padding="20px 0 40px 0">
            <P color="grayscale7" font_size="l" font_weight="regular">
                게임 오버
            </P>

            <Div width="50%" justify_content="space-between">
                <Div width="120px" height="100px" border_radius="10px" background_color="blue4" flex_direction="column" >
                    <P color="blue3" font_size="m" font_weight="regular">점수</P>
                    <P color="grayscale1" font_size="s" font_weight="regular">{1111}</P>
                </Div>
                <Div width="120px" height="100px" border_radius="10px" background_color="blue4" flex_direction="column" >
                    <P color="blue3" font_size="m" font_weight="regular">순위</P>
                    <P color="grayscale1" font_size="s" font_weight="regular">{1111}</P>
                </Div>
            </Div>

            <Div width="18%" height="70px" flex_direction="column" justify_content="space-between">
                <P color="grayscale7" font_size="m" font_weight="regular">
                    코인
                </P>
                <Div width="100%" justify_content="space-between">
                    <Img src={`${process.env.PUBLIC_URL}/img_srcs/icons/severalCoinIcon.png`} height="29px"/>
                    <P color="green" font_size="m" font_weight="regular">+{111}</P>
                </Div>
            </Div>

            <Div width="50%" height="140px" flex_direction="column" justify_content="space-between">
                <P color="grayscale7" font_size="m" font_weight="regular">
                    업적
                </P>
                <Div>
                    {/* 아마 컴포넌트로 뺼듯 */}
                    <ShadowDiv width="95px" height="100px" border_radius="10px"></ShadowDiv>
                </Div>
            </Div>

            <Div width="88%" justify_content="space-evenly">
                <Button width="32%" height="50px">
                    <P font_size="s" font_weight="regular" color="grayscale1">다시하기</P>
                </Button>
                <Button width="32%" height="50px">
                    <Img src={`${process.env.PUBLIC_URL}/img_srcs/icons/homeIcon.png`} height="25px"/>
                    <P font_size="s" font_weight="regular" color="grayscale1" padding="0 0 0 10px">홈으로 이동</P>
                </Button>
                <Button width="32%"  height="50px">
                    <Img src={`${process.env.PUBLIC_URL}/img_srcs/icons/shareIcon.png`} height="25px"/>
                    <P font_size="s" font_weight="regular" color="grayscale1" padding="0 0 0 10px">공유</P>
                </Button>
            </Div>
        </Div>
    )
}

export default GameOverModal