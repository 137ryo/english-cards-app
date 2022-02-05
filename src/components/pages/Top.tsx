import React, { VFC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CommonButton } from "../atoms/button/CommonButton";

const SContainer = styled.div`
  text-align: center;
`;

export const Top: VFC = () => {
  const history = useHistory();

  const onClickStart = () => {
    history.push("/cards");
  };

  return (
    <SContainer>
      <h2>English Word Card</h2>
      <CommonButton onClick={onClickStart}>スタート</CommonButton>
    </SContainer>
  );
};
