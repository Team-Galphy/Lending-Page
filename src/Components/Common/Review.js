import styled from "styled-components";



export default function Review({title, one, two}){
    return(
        <Sdiv>
            <Sh>{ title }</Sh>
            <SP>{ one }<br></br>{ two }</SP>
        </Sdiv>
    );
}

const Sdiv = styled.div`
    width: 330px;
    min-width: 330px;
    height: 100%;
    margin-right: 40px;

    background: #D9D9D9;
    border-radius: 35px;
    position: relative;
`;

const Sh = styled.h4`
    position: absolute;
    width: fit-content;
    height: 30px;
    left: 24px;
    top: 30px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;

    letter-spacing: -0.04em;

    color: #000000;
`;

const SP = styled.p`
    position: absolute;
    width: fit-content;
    height: 48px;
    left: 24px;
    top: 70px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;

    letter-spacing: -0.02em;

    color: #4A4A4A;
`;