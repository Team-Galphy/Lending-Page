import styled from "styled-components";
import Review from "./Common/Review";


export default function Card(){
    return(
        <Container>
            <div>
                <div className="top-cardarea">
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
                    <Review />
                    <Review />
                </div>
                <div className="bottom-cardarea">
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
                    <Review />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.main`
    margin-top: 40px;
    width: 100%;
    height: 380px;
    overflow-x: hidden;

    > div{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        animation: marquee1 20s linear infinite;

        > div{
            margin-top: 20px;
            width: 100vw;
            height: 50%;
            display: flex;
            flex-direction: row;
        }

        .bottom-cardarea{
            transform: translateX(-185px);
        }
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