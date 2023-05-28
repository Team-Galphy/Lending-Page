import styled from "styled-components";
import { useState } from "react";
import PopUp from "./popup";

export default function Main() {

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <Container>
        <div>
            <strong class="text1">우리가 원하던  <strong id="gap">&nbsp;</strong></strong>
            <strong class="text2">독서 플랫폼</strong>
        </div>
        <button onClick={() => setShowPopUp(true)}>사전예약하기</button>
        {
                  showPopUp ? <PopUp setShowPopUp={setShowPopUp} /> : null
        }
    </Container>
  );
}

const Container = styled.main`
  display: flex;;
  flex-direction: column;
  
  strong {
      font-family: "Pretendard";
      font-size: 65px;
      font-weight: 800;
      text-align: center;
      color: #a89684;

      @media (max-width: 800px) {
          #gap {
              display: none;
          }
          
          font-size: 75px;
      }

      @media (max-width: 400px) {
      font-size: 64px;
      }
  }

  div {
      display: flex;
      margin: 155px auto 0 auto;

      @media (max-width: 800px) {
          flex-direction: column;

          .text2{
              margin-top: 12px;
          }
      }
  }

  .text2{
      color: #856346;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 230px;
    height: 66px;
    margin: 0 auto;
    margin-top: 90px;
    border: 0px;
    background: #9d7c60;
    border-radius: 30px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;
