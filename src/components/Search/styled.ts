import styled, { css } from "styled-components/native";

type ButtonProps ={
  isActiveAnimation: boolean
}
export const Container = styled.View`

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
`
;

export const ButtonSearch = styled.TouchableHighlight<ButtonProps>`
  width: 40px;
  background-color: #ffff;
  opacity: 0.5;
  justify-content: center;
  height: 44px;
  align-items: center;

  ${({isActiveAnimation}) => css`
    border-radius: ${isActiveAnimation ? "0px" : "20px"};
      border-top-right-radius: 20px;
       border-bottom-right-radius: 20px;
  `}
`;
export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 40px;
  background-color: #ffff;
`;
