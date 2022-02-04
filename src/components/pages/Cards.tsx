import React, { ChangeEvent, useState, VFC } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { CommonButton } from "../atoms/button/CommonButton";
import { WordCard } from "../organisms/WordCard";
import { userState } from "../../hooks/userState";
import { Input } from "../atoms/input/Input";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUsersArea = styled.div`
  padding-top: 40px;
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
const SInputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 10px;
`;

export const Cards: VFC = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  //const [userInfo, setUserInfo] = useRecoilState(userState);

  // 未完了のTODOリスト
  //const [wordCard, setWordCard] = useState([]);

  // 英単語リスト
  const [cardList, setCardList] = useState([{ question: "", answer: "" }]);

  const [questionWord, serQuestionWord] = useState("");

  const [answerWord, serAnswerWord] = useState("");

  const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    serQuestionWord(e.target.value);
  };

  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    serAnswerWord(e.target.value);
  };

  const onClick = () => {
    if (questionWord === "" && answerWord === "") return;

    const newCardList = [
      ...cardList,
      { question: questionWord, answer: answerWord }
    ];
    //setCardList([...cardList, {question: questionWord, answer: answerWord}]);

    setCardList(newCardList);
    // setValues({ ...values, title: 'changed title' });
  };

  console.log(cardList);

  //const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>英単語カード一覧</h2>
      <SInputContainer>
        <SButtonWrapper>
          <Input
            value={questionWord}
            placeholder="英単語を入力"
            onChange={onChangeQuestion}
          />
          <br />
          <Input
            value={answerWord}
            placeholder="答えを入力"
            onChange={onChangeAnswer}
          />
          <br />
          <CommonButton onClick={onClick}>追加</CommonButton>
        </SButtonWrapper>
      </SInputContainer>
      <br />
      <SUsersArea>
        <ul>
          {cardList.map((obj) => (
            <WordCard
              key={obj.question}
              question={obj.question}
              answer={obj.answer}
            />
          ))}
        </ul>
      </SUsersArea>
    </SContainer>
  );
};
