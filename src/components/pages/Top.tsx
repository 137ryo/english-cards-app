import { VFC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CommonButton } from "../atoms/button/CommonButton";

const SContainer = styled.div`
  text-align: center;
`;

const STitle = styled.p`
  margin-top: 150px;
  font-size: 40px;
  font-family: "Lato", sans-serif;
`;

export const Top: VFC = () => {
  const history = useHistory();

  const onClickStart = () => {
    history.push("/cards");
  };

  return (
    <SContainer>
      <STitle>English Word Card</STitle>
      <CommonButton onClick={onClickStart}>スタート</CommonButton>
    </SContainer>
  );
};
