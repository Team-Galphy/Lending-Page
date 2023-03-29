import styled from "styled-components";
import Review from "../Common/Review";

export default function Card1(){
    return(
        <Container>
            <div>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 50%;
    
    > div{
        display: flex;
        flex-direction: row;
        animation: marquee1 10s linear infinite;
    }

    @keyframes marquee1 {
        from {
            transform: translateX(-50%);
        }

        to {
            transform: translateX(0);
        }
    }
`;