import styled from "styled-components";


export default function Main(){
    return(
        <Container>
            <h1 class="main-title">
                우리가 원하던
                <span class="text-style-1">독서 플랫폼</span>
            </h1>
            <button>사전예약하기</button>
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    .main-title {
        margin-top: 192px;
        font-family: Pretendard;
        font-size: 80px;
        font-weight: 800;
        text-align: center;
        color: #a89684;
    }

    .main-title .text-style-1 {
        padding-left: 18px;
        font-weight: 900;
        color: #856346;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 290px;
        height: 79px;
        margin: 0 auto;
        margin-top: 80px;
        border: 0px;
        background: #9D7C65;
        border-radius: 35.5px;

        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 42px;
        /* identical to box height */

        text-align: center; 

        color: #FFFFFF;
    }


`;