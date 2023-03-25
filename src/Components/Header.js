import styled from "styled-components";
import logo from "../Assets/Img/logo.png";

export default function Header(){
    return(
        <Container>
            <div>
                <img src={logo} alt="Logo"/>
                <div class="logo-text">
                    Galphy
                </div>
            </div>
        </Container>
    );
}

const Container = styled.header`
    width: 100vw;
	height: 60px;
	background-color: white;
    flex-grow: 0;
    display: flex;
    align-items: center;

    > div{
        display: flex;
        flex-direction: row;

        img{
            margin: 0 0 0 160px;
            width: 35px;
            height: 35px;
            object-fit: cover;
        }
        
        .logo-text {
            margin: 2px 0 0 10px;
            width: fit-content;
            height: fit-content;
            font-family: Pretendard;
            font-size: 27px;
            font-weight: 800;
            color: #866447;
        }
    }
`;
