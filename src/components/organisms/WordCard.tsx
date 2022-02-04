import { memo, VFC } from "react";
import styled from "styled-components";
import { Card } from "../atoms/card/Card";
//import { UserIconWithName } from "../../molecules/user/UserIconWithName";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color: #22eeef;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 10px;
`;

const SQuestion = styled.p`
  margin: 5px;
  font-size: 24px;
`;

const SAnswer = styled.p`
  margin: 5px;
  font-size: 16px;
`;

const SOpen = styled.button`
  margin: 5px;
  padding: 6px 20px;

  border: none;
  background-color: #96ffaa;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

type Props = {
  question: string;
  answer: string;
};

export const WordCard: VFC<Props> = memo((props) => {
  const { question, answer } = props;
  return (
    <SContainer>
      <SQuestion>{question}</SQuestion>
      <SOpen>答えを見る</SOpen>
      <SAnswer>{answer}</SAnswer>
    </SContainer>
  );
});
