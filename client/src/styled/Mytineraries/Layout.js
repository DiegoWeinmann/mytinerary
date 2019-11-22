import styled from "styled-components";
import { shadow } from "styled";
import { colors } from "../helpers";

export const Title = styled.div`
  width: 100%;
  height: 15vh;
  background: ${colors.accent[1]} ;
  color: #eee;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  box-shadow: ${() => shadow()};
`;
