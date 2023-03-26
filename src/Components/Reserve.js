import styled from "styled-components";

export default function Rserve(){
    return(
        <Container>
            <strong class="main-title">
                가나다라 
                <span class="text-style-1">마바사아자차</span>
            </strong>
            <button>사전예약하기</button>
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    .main-title {
        margin-top: 155px;
        font-family: 'Pretendard';
        font-size: 65px;
        font-weight: 800;
        text-align: center;
        color: #a89684;
    }

    .main-title .text-style-1 {
        padding-left: 14px;
        font-weight: 900;
        color: #9D7C60;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 230px;
        height: 66px;
        margin: 0 auto;
        margin-top: 90px;
        margin-bottom: 100px;
        border: 0px;
        background: #9D7C60;
        border-radius: 30px;

        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 42px;
        /* identical to box height */

        text-align: center; 

        color: #FFFFFF;
    }


`;