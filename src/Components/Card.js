import styled from "styled-components";
import Card1 from "./Cardarea/Card1";
import Card2 from "./Cardarea/Card2";


export default function Card(){
    return(
        <Container>
            <Card1 />
            <Card2 />
        </Container>
    );
}

const Container = styled.main`
    margin-top: 40px;
    width: 100vw;
    height: 360px;
`;