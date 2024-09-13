import styled from "styled-components";

export const ContainerItens = styled.div`
     background: linear-gradient(
      157.44deg,
      rgba(100, 255, 55, 0.6) 0.84%,
      rgba(100, 255, 55, 0.6) 0.85%,
      rgba(100, 255, 55, 0.15) 100%
     );

     border-radius: 61px 61px 0px 0px;
     padding: 35px 35px;
     display: flex;
     flex-direction: column;

     ${props=> props.isBlur && `
        backdrop-filter: blur(45px);
     `}
`;