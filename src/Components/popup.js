import styled from "styled-components";
import Logo2 from '../assets/popup/popup_logo.png'
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { useState, useRef } from "react";

const PopUp = ({ setShowPopUp }) => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const [text, setText] = useState('');
    const PopUpBg = useRef(null);
    
    return ( 
        <Sback
            ref={PopUpBg}
            onClick={e => {
                if(e.target === PopUpBg.current)
                    setShowPopUp(false);
            }}
        >
            <Board>
                <Logo src={Logo2} alt="logo"/>
                <Text>사전예약을 하면 출시 알림을 드릴게요!</Text>
                <Input placeholder="메일 입력하기" onChange={(e) => {setText(e.target.value)}} value={text}/>
                <PopUpButton onClick={async ()=>{
                    if(emailRegEx.test(text)){
                        const boardRef = collection(db, "board");
                        setShowPopUp(false);
                        await addDoc(boardRef, { email: text });
                        alert('사전예약이 완료되었습니다!');
                    }else{
                        alert('이메일을 입력하세요!');
                    }
                }}><p>사전예약하기</p></PopUpButton>
            </Board>s
        </Sback>
     );
}
 
export default PopUp;

const Sback = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px !important;
    background-color: rgba(0,0,0,0.5);

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
`;

const Board = styled.div`
    width: 660px;
    height: 400px;

    @media (max-width: 800px) {
        width: 80vw;
        min-width: 280px;
    }

    background: #ffffff !important;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    width: 273.9px;
    height: 84px;
    margin: 56px 0 0 10px;
`;

const Text = styled.p`
    margin: 10px 0 10px 0;

    width: 242px;
    height: 19px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;

    color: rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
    margin: 25px 0 0 0;

    width: 280px;
    height: 50px !important;
    @media (max-width: 500px) {
        width: 220px;
    }
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    padding: 0 20px;

    color: rgba(0, 0, 0, 0.7);

    background: #F4F5F7;
    border-radius: 5px; 
    border: none;

    &::placeholder {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        /* identical to box height */

        text-align: center;

        color: rgba(0, 0, 0, 0.2);
        text-align: start;
    }
`;

const PopUpButton = styled.button`
    margin: 20px 0 0 0 !important;
    width: 320px !important;
    height: 50px !important;

    background: #9D7C65;
    border-radius: 5px !important;  

    > p {
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 23px;
        line-height: 23px;
        /* identical to box height */

        color: #FFFFFF !important;
    }
    @media (max-width: 500px) {
        width: 260px !important;
    }
`;

