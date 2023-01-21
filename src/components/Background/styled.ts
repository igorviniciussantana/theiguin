import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #18082e;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

export const YellowUp = styled.div`
  @media screen and (max-width: 720px) {
    width: 60vw;
    height: 60vw;

    position: absolute;
    left: 0;

    background: #ff8a00;
    filter: blur(100px);
  }
`;

export const YellowDown = styled.div`
  @media screen and (max-width: 720px) {

  width: 70vw;
  height: 70vw;

  position: absolute;
  bottom: 30vw;
  right: -15vw;

  background: #ff8a00;
  filter: blur(110px);
  }
`;

export const PurpleUp = styled.div`
  @media screen and (max-width: 720px) {

  width: 60vw;
  height: 60vw;

  position: absolute;
  left: -30vw;
  top: 20vw;
  z-index: 2;

  background: #7d16ff;
  filter: blur(100px);
  }
`;

export const PurpleDown = styled.div`
  @media screen and (max-width: 720px) {

  width: 60vw;
  height: 60vw;

  position: absolute;
  bottom: 0;
  right: 35vw;

  z-index: 3;
  background: #7d16ff;
  filter: blur(80px);
  }
`;
