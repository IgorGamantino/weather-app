import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Linear = styled(LinearGradient)`

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%


`;

export const Title = styled.Text``;