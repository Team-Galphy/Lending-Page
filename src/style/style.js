import styled from "styled-components";

export const Container1 = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  margin-top: 100px;

  > div {
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
      flex-direction: column;
      margin-left: 30px;
    }

    > div {
      margin-right: 250px;
      width: 378.65px;
      @media (max-width: 1000px) {
        margin-right: 0px;
      }

      > div {
        margin-top: 35px;

        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;

        color: #3f3f3d;

        @media (max-width: 580px) {
          font-size: 20px;
        }
      }
    }
  }
  img {
    margin: 80px 0 0 0;
    width: 285px;
    min-width: 60px;
    height: auto;

    @media (max-width: 620px) {
      margin: 40px 0 0 0;
      width: 180px;
    }
  }
  h2 {
    font-family: "Pretendard";
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #8c6141;
    margin: 80px 0 30px 1px;

    @media (max-width: 580px) {
      font-size: 30px;
      line-height: 34px;
    }
  }
  h3 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 84px;

    color: #1C1C1C;

    @media (max-width: 580px) {
      font-size: 50px;
      line-height: 55px;
    }
  }
`;

export const Container2 = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  margin-top: 100px;
  > div {
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
      margin-left: 50px;
    }

    > div {
      margin-left: 250px;
      width: 378.65px;

      @media (max-width: 1000px) {
        margin-left: 0px;
      }

      > div {
        margin-top: 35px;

        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;

        color: #3f3f3d;

        @media (max-width: 580px) {
          font-size: 20px;
        }
      }
    }
  }
  img {
    margin: 80px 0 0 0;
    width: 285px;
    min-width: 60px;
    height: auto;

    @media (max-width: 620px) {
      margin: 40px 0 0 0;
      width: 180px;
    }
  }

  h2 {
    font-family: "Pretendard";
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #8c6141;
    margin: 80px 0 30px 1px;
    
    @media (max-width: 580px) {
      font-size: 30px;
      line-height: 34px;
    }
  }
  h3 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 84px;

    color: #1C1C1C;

    @media (max-width: 580px) {
      font-size: 50px;
      line-height: 55px;
    }
  }
`;
