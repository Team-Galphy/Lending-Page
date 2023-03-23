import styled from "styled-components";


export default function Main(){
    return(
        <Container>
            <h1 class="main-title">
                우리가 원하던
                <span class="text-style-1">독서 플랫폼</span>
            </h1>
        </Container>
    );
}

const Container = styled.div`
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
`;