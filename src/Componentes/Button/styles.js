import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
     width: 342px;
     height: 74px;
     background: ${props => props.isBack ? 'transparent' : 'rgba(0, 200, 10, 0.8)'};
     border-radius: 14px;
     border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};
     color: #ffffff;
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top: 50px;
     gap: 20px;

     &:hover{
      opacity: 0.8;
     }
     &:active{
      opacity: 0.5;
     }

     img{
          transform: ${props => props.isBack && 'rotateY(180deg)'};
     }
`;