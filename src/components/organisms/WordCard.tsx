import { memo, useState, VFC } from "react";
import styled from "styled-components";
import { CommonButton } from "../atoms/button/CommonButton";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  box-shadow: #858b93 0px 0px 2px 2px;
  border-radius: 10px;
`;

const SQuestion = styled.p`
  margin: 5px;
  font-size: 24px;
  font-weight: bold;
`;

const SAnswer = styled.p`
  margin: 5px;
  font-size: 16px;
`;

const SButtonArea = styled.div`
  display: flex;
`;

type Props = {
  index: number;
  question: string;
  answer: string;
  onClickDelete: any;
};

export const WordCard: VFC<Props> = memo((props) => {
  const { index, question, answer, onClickDelete } = props;

  // 答えの開閉管理
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <SContainer>
      <SQuestion>{question}</SQuestion>
      <SButtonArea>
        {open ? (
          <CommonButton onClick={onClickOpen}>答えを閉じる</CommonButton>
        ) : (
          <CommonButton onClick={onClickOpen}>答えを見る</CommonButton>
        )}
        <CommonButton onClick={() => onClickDelete(index)}>削除</CommonButton>
      </SButtonArea>
      {open ? <SAnswer>{answer}</SAnswer> : null}
    </SContainer>
  );
});
