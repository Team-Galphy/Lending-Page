import styled from "styled-components";
import logo from "../Assets/Img/main_logo.png";

export default function Header(){
    return(
        <Container>
            <div>
                <img src={logo} alt="Logo"/>
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

    img{
        margin: 0 0 0 160px;
        width: fit-content;
        height: 35px;
        object-fit: cover;
    }
`;
