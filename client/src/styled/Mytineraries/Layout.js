import styled from "styled-components";
import { shadow } from "styled";

export const Title = styled.div`
  width: 100%;
  height: 15vh;
  background: #919191;
  color: #eee;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  box-shadow: ${() => shadow()};
`;
