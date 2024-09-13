import styled from 'styled-components';
import background from '../../assets/fundo.png'

export const Container = styled.div`
     background: url("${background}");
     background-size: cover;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 20px;

`;

export const Image = styled.img`
     margin-top: 30px;
`;

export const InputLabel = styled.p`
     font-style: normal;
     font-weight: bold;
     font-size: 18px;
     line-height: 22px;
     color: #eeeeee;
     letter-spacing: -0.408px;
     margin-left: 25px;

`;

export const Input = styled.input`
     background: rgba(255, 255, 255, 0.25);
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     border-radius: 14px;
     width: 342px;
     height: 58px;
     border: none;
     outline: none;
     padding-left: 25px;
     margin-bottom:34px;
     font-weight: normal;
     font-size: 20px;
     line-height: 28px;
     color: #ffffff;

`;
