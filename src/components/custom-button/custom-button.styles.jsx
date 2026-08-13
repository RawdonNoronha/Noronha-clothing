import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black
    
    &:hover{
      background-color: black;
      color: white;
      border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border:none;
    &:hover {
        background-color: #357ae8;
    }
`;

const getButtonStyles = props => {
    if(props.$isGoogleSignIn){
        return googleSignInStyles;
    }
    return props.$inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'inverted' && prop !== 'isGoogleSignIn',
    })`
    min-width: 140px;
    width: auto;
    height: 45px;
    letter-spacing: 0.5px;
    line-height: 45px;
    padding: 0 20px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    touch-action: manipulation;
    user-select: none;
    border-radius: 2px;

    @media (min-width: 481px) {
      min-width: 150px;
      height: 48px;
      line-height: 48px;
      padding: 0 28px;
      font-size: 13px;
    }

    @media (min-width: 768px) {
      min-width: 165px;
      height: 50px;
      line-height: 50px;
      padding: 0 35px;
      font-size: 15px;
    }

    ${getButtonStyles}
`;  