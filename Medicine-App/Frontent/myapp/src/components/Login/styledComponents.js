import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f0f0f0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ErrorPara = styled.p`
padding-left:20px;
color:red;
padding-top:4px;
font-size:16px;
`

export const LoginForm = styled.div`
  width: ${props => props.centervenum ? '100%' : '480px'};
  max-width: 500px;
  height: ${props => props.centervenum ? 'auto' : '540px'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centervenum ? 'center' : 'stretch'};
  box-shadow: ${props => props.centervenum ? 'none' : '0 0 10px rgba(0,0,0,0.1)'};
  background-color: white;
  border-radius: 10px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const RegImg = styled.img`
  width: 150px;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: ${props => props.pad ? '13px' : '15px'};
  padding-left: ${props => props.pad ? '6px' : '20px'};

  @media screen and (max-width: 768px) {
    font-size: 13px;
    padding-left: 10px;
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 7px;
  margin-left: 20px;
  border: none;
  outline: none;
  background-color: rgb(239, 251, 255);
  margin-bottom: 15px;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 10px;
  }
`;

export const Input1 = styled.input`
  width: 14px;
  height: 14px;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 5px;
  margin-left: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color:${props => props.reg ? ' rgb(132, 15, 15)' : 'rgb(18, 128, 31)'};
  color:white;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 40%;
    margin-left: 10px;
  }
`;
