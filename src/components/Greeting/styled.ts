import styled from "styled-components";

export const GreetingWrapper = styled.div`
  width: 100%;
  margin-top: 1.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  background: linear-gradient(90.69deg, #ffb800 -2.01%, #9f53ff 109.28%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  opacity: 0.8;

  animation: blinker 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;

  @keyframes blinker {
    50% {
      opacity: 1;
    }
  }
`;

export const Subtitle = styled.h2`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.76em;
  text-align: center;
  color: white;
  font-weight: inherit;
`;

export const Logo = styled.img`
  margin: 1rem 0 1.5rem 0;
`;
