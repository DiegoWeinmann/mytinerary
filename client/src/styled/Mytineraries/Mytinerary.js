import styled from "styled-components";
import { shadow } from "styled";
import { colors } from "../helpers";

export const MtyWrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  background: ${colors.white[0]};
  padding: 1rem;
  box-shadow: ${() => shadow('lg')};
  border-radius: 5px;
`;

export const MtyTitle = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
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
  font-size: .75rem;
  text-align: ${props => (props.center ? "center" : "left")};
  margin-left: .25rem;
`;

export const MtyHashtags = styled.span`
  position: relative;
  bottom: 0;
  right: 0;

  span {
    margin-left: .25rem;
    font-size: .75rem;
  }
`
