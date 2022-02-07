import { VFC } from "react";
import styled from "styled-components";

const SContainer = styled.div`
  text-align: center;
`;

const STitle = styled.p`
  margin-top: 150px;
  font-size: 40px;
  font-family: "Lato", sans-serif;
`;

export const Page404: VFC = () => {
  return (
    <SContainer>
      <STitle>404 NotFound</STitle>
    </SContainer>
  );
};
