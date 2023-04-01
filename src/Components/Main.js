import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <h1 class="main-title">
        우리가 원하던
        <br />
        <span class="text-style-1">독서 플랫폼</span>
      </h1>
      <button>사전예약하기</button>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  .main-title {
    margin-top: 155px;
    font-family: "Pretendard";
    font-size: 65px;
    font-weight: 800;
    text-align: center;
    color: #a89684;

    @media (max-width: 800px) {
      font-size: 75px;
    }

    @media (max-width: 400px) {
      font-size: 64px;
    }

    > br {
      display: none;
      @media (max-width: 800px) {
        display: block;
      }
    }
  }

  .main-title .text-style-1 {
    padding-left: 14px;
    font-weight: 900;
    color: #9d7c60;

    @media (max-width: 800px) {
      margin-top: 5px;
      padding-left: 0px;
    }
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
