import styled from "styled-components";
import { shadow } from "styled";
import { colors } from "../helpers";

export const MtyWrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  background: ${colors.white[0]};
  padding: 1rem 0.75rem 0 0.75rem;
  box-shadow: ${() => shadow("lg")};
  border-radius: 5px;
  overflow: hidden;
`;

export const MtyTitle = styled.div`
  width: 100%;
  min-height: 3.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-aling: right;
  border-bottom: 3px dotted ${colors.secondary[1]};

  display: flex;
  aliagn-items: center;
`;

export const MtyImage = styled.img`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  border-radius: 50%;
`;

export const MtyDetailsContainer = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  aling-items: center;
`;

export const MtyDetail = styled.div`
  font-size: 0.8rem;
  text-align: ${props => (props.center ? "center" : "left")};
  margin-left: 0.25rem;
`;

export const MtyHashtags = styled.span`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 0.5rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    background: ${colors.accent[1]};
    color: ${colors.white[2]};
    box-shadow: ${() => shadow("sm")};
    border-radius: 5px;
  }
`;

export const ActivitiesToggler = styled.button`
  width: 100%;
  height: 2rem;
  margin: 1rem 0 0 0;
  display: block;
  font-style: italic;
  color: white;
  border: none;
  background: linear-gradient(${colors.accent[0]}, ${colors.accent[2]});
`;
