import styled from "styled-components";
import { shadow } from "styled";

export const MtyWrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  padding: 1rem;
  box-shadow: ${() => shadow()};
`;

export const MtyTitle = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.5rem;
`;

export const MtyImage = styled.img`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 50%;
`;

export const MtyDetail = styled.div`
  font-size: 0.75rem;
  text-align: ${props => (props.center ? "center" : "left")};
`;
