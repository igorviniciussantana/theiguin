import styled from "styled-components";

export const CardWrapper = styled.a`
display: flex;
position: relative;
transition: 0.5s !important;


&:hover{
  transform: scale(1.04) ;
  transition: 0.5s ;
}

margin-bottom:0.5rem;
align-items: center;
column-gap: 1rem;
padding: 1.25rem 1.5rem;
width: clamp(3rem, 90vw, 30rem);
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(16.5px);
border-radius: 0.5rem;
box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.2);

color: white;

&::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;

    border-radius: 0.5rem;
    background: linear-gradient(134.82deg, #ab72f3 2.82%,  #ffb800 107.42%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Icon = styled.img`
`

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: fit-content;
`

export const Title = styled.h1`
font-size: 1.5rem;
font-weight: inherit;

text-transform: uppercase;
`

export const Subtitle = styled.h2`
font-size: 0.75rem;
font-weight: inherit;
text-transform: uppercase;

`