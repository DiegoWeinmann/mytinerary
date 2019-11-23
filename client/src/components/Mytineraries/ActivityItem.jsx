import React from "react";
import styled from "styled-components";
import { colors } from "styled";

const ActWrapper = styled.div`
  flex: 1 0 100%;
  flex: nowrap;
  background: ${colors.primary[1]};
  color: ${colors.white[0]};
  font-size: 1.5rem;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* scroll */
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const ActivityItem = props => {
  console.log(props);
  return (
    <ActWrapper>
      <div>{props.details.title}</div>
    </ActWrapper>
  );
};

export default ActivityItem;
