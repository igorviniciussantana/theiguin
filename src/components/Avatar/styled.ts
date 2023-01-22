import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: clamp(2rem, 60vw, 8rem);
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 0.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 2px;

    border-radius: 50%;
    background: linear-gradient(134.82deg, #ffb800 2.82%, #ab72f3 107.42%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const AvatarPhoto = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;

  position: relative;

  .avatar {
    border-radius: 50%;
  }
`;
