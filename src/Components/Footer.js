import styled from "styled-components";
import footer_logo from "../Assets/Img/footer_logo.png";

export default function Footer(){
    return(
        <Container>
            <div>
                <S1>
                    <img src={footer_logo} alt="푸터 로고"/>
                    <small>Copyright 2023. Galphy all rights reserved.</small>    
                </S1>
                <div></div>
                <S2>
                    <div>
                        <a>개인정보처리방침</a>
                        <a>이용약관</a>
                    </div>
                    <div className="e-mail">000000000@galphy.com</div>
                </S2>
            </div>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    flex-direction: row;

    overflow-x: hidden;

    width: 100vw;
    height: 130px;
    background-color: #DCDCDC;
    bottom: 0;

    > div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 0px 200px 0px 200px;
        
        > div{
            width: 100%;
        }
    }
`;

const S1 = styled.div`
        margin-top: 24px;
        display: flex;
        flex-direction: column;


        > img{
            width: 150px;            
        }
        
        > small{
            margin-top: 20px;
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;

            color: #737373;
    }
`;

const S2 = styled.div`
        margin-top: 46px;
        display: flex;
        flex-direction: column;


        div{
            font-family: 'Pretendard';
            font-weight: 500;
            font-size: 15px;
            color: #737373;

            text-align: end;

            > a{
                margin-left: 10px;
            }
        }


        .e-mail{
           margin-top: 25px;
        }
`;