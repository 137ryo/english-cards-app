import React, { ChangeEvent, useState, VFC } from "react";
import styled from "styled-components";

import { WordCard } from "../organisms/WordCard";
import { AddButton } from "../atoms/button/AddButton";
import { AddInput } from "../atoms/input/AddInput";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SInputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 10px;
`;

const SCardArea = styled.ul`
  padding: 20px;
  width: 100%;
  flex-direction: column;
`;

const SMessage = styled.p`
  color: red;
  text-align: center;
`;

export const Cards: VFC = () => {
  // 英単語カードリスト
  const [cardList, setCardList] = useState([
    { question: "Sample", answer: "サンプル" }
  ]);

  const [questionWord, serQuestionWord] = useState("");

  const [answerWord, serAnswerWord] = useState("");

  const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    serQuestionWord(e.target.value);
  };

  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    serAnswerWord(e.target.value);
  };

  // 英単語カードの追加
  const onClick = () => {
    if (questionWord === "" || answerWord === "") return;

    const newCardList = [
      ...cardList,
      { question: questionWord, answer: answerWord }
    ];
    setCardList(newCardList);
  };

  // 英単語カードの削除
  const onClickDelete = (index: number) => {
    const newCardList = [...cardList];
    newCardList.splice(index, 1);
    setCardList(newCardList);
  };

  return (
    <SContainer>
      <h2>Card View</h2>
      <SInputArea>
        <AddInput
          value={questionWord}
          placeholder="英単語を入力"
          onChange={onChangeQuestion}
          disabled={cardList.length >= 6}
        />
        <br />
        <AddInput
          value={answerWord}
          placeholder="答えを入力"
          onChange={onChangeAnswer}
          disabled={cardList.length >= 6}
        />
        <br />
        <AddButton onClick={onClick} disabled={cardList.length >= 6}>
          追加
        </AddButton>
        {cardList.length >= 10 && (
          <SMessage>登録できる英単語カードは10個までです。</SMessage>
        )}
      </SInputArea>
      <SCardArea>
        {cardList.map((obj, index) => (
          <WordCard
            key={obj.question}
            index={index}
            question={obj.question}
            answer={obj.answer}
            onClickDelete={onClickDelete}
          />
        ))}
      </SCardArea>
    </SContainer>
  );
};
