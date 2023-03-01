// ===== import base =====
import React from "react"
import styled from "styled-components"
import { useRecoilValue, useSetRecoilState } from "recoil"

// ===== import page =====
import Login from "../pages/Login"
import Find from "../pages/Find"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import Achievement from "../pages/Achievement"
import Item from "../pages/Item"
import Game2048 from "../pages/Game2048"

// ===== import component =====
import Bg from "./Bg"
import Ranking from "./Ranking"
import Modal from "./Modal"
import BtnAnimation from "./BtnAnimation"


// ===== import hook =====
import { useSetModalState } from "../hooks/useSetModalState"

// ===== import recoil =====
import { whichPageState } from "../../src/recoil/PageState"
import { isModalOpenState ,whichModalState } from "../recoil/ModalState"
// ===== import style =====
import { Div } from "../styles/Div"
import { Img, ImgBtn } from "../styles/Img"

// ===== style =====
const BackDiv = styled(Div)`
    position:absolute;
    top: 90%;
    left:2%;
`

const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    width:100%;
`
const GameStartBeforeBtn = styled(ImgBtn)`
    position:absolute;
    &:hover{
        opacity: 0;
        transition: 0.5s;
    }
    &:not(:hover){
        transition: 0.5s;
    }
`

//  ===== component =====

// 헤더 아이콘 크기가 너무크다고 생각 줄이는거 어떨지?
const Main = () =>{

    // ===== state =====
    const [isMouseHover, setMouseHover] = React.useState(false)

    // ===== recoil state =====
    const whichPage = useRecoilValue(whichPageState)
    const setModalState = useSetRecoilState(whichModalState)
    const setModalOpen = useSetRecoilState(isModalOpenState)

    // ===== event =====
    //수정한 부분
    const gameStartBtnEvent = (e) =>{
        setModalState("gameSelectModal")
        setModalOpen(true)
    }

    return(
        <MainStyle>
            <Modal></Modal>
            {
                (whichPage !=="2048")
                ?
                <Div width="90%">
                    {/* 아마 랭킹 컴포넌트 자리 */}
                    <Div width="50%">
                        {
                            (whichPage === "logIn" || whichPage==="home")
                            &&
                            <Div width="100%" flex_direction="column" align_items="flex-start" height="100vh">
                                { //수정한 부분
                                    whichPage==="home" && 
                                    <Div margin="0 0 20px 0" onClick={gameStartBtnEvent}>
                                        <ImgBtn src={`${process.env.PUBLIC_URL}/img_srcs/btns/gameStartAfterBtnImg.png`}/>
                                        <GameStartBeforeBtn src={`${process.env.PUBLIC_URL}/img_srcs/btns/gameStartBeforeBtnImg.png`}/>
                                    </Div>
                                }
                                <Ranking game="tetris"/>
                                <Ranking game="2048"/>
                            </Div>
                        }
                        
                        
                        
                    </Div>
                    {/* 아마 따로 분리해야할 듯 */}
                    <Div flex_direction = "column" width = "50%" height="100vh">
                        {whichPage === "logIn" && <Login></Login> }
                        {(whichPage === "idFind" || whichPage === "pwFind") && <Find></Find>}
                        {whichPage === "signUp" && <SignUp></SignUp>}
                        {whichPage ==="home" && <Home/>}
                        {whichPage ==="item" && <Item/>}
                        {whichPage ==="achievement" && <Achievement/>}
                        
                    </Div>
                    
                </Div>
                :
                <Div height="100vh" width="100%">
                    <Game2048/>
                </Div>
                
            }
            
            {/* footer로 빼야할 듯 */}
            <BackDiv>
                <BtnAnimation event={useSetModalState("quitGameModal")}
                before_src={`${process.env.PUBLIC_URL}/img_srcs/btns/backBeforeBtnImg.png`}
                after_src={`${process.env.PUBLIC_URL}/img_srcs/btns/backAfterBtnImg.png`}
                />
            </BackDiv>
            <Bg></Bg>
        </MainStyle>
    )
}

export default Main