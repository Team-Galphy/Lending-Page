import styled from "styled-components";
import logo from "../assets/logo/main_logo.png";

export default function header(){
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
        margin-left: 12rem;
        width: 132.02 !important;
        height: 35px;
        object-fit: cover;
    }
    @media (max-width: 1200px){
        img{
            margin-left: 4rem;
        }
    }
    
    @media (max-width: 900px){
        img{
            margin-left: 3rem;
        }
    }

    @media (max-width: 600px){
        img{
            margin-left: 2rem;
        }
    }
`;
