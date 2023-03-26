import styled from "styled-components";
import footer_logo from "../Assets/Img/footer_logo.png";

export default function Footer(){
    return(
        <Container>
            <div>
                <img src={footer_logo} alt="푸터 로고"/>
                <small>Copyright 2023. Galphy all rights reserved.</small>    
            </div>
            <div>
                <a>개인정보처리방침</a>
                <a>이용약관</a>
                <div>000000000@galphy.com</div>
            </div>
        </Container>
    );
}

const Container = styled.footer`
    width: 100vw;
    height: 130px;
    background-color: #DCDCDC;
    bottom: 0;
    
    &:first-child{
        > small{
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;

            color: #737373;
        }
    }

    &:last-child{
        > a {
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            /* identical to box height */

            text-align: right;

            color: #737373;
        }
        > div{
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            /* identical to box height */

            text-align: right;

            color: #737373;
        }
    }
`;