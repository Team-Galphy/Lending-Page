import styled from "styled-components";
import Review from "../Common/Review";

export default function Card1(){
    return(
        <Container>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: row;

    width: 100vw;
    height: 50%;
    background-color: white;
`;