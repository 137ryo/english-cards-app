import { memo, VFC } from "react";
import styled from "styled-components";
import { Card } from "../atoms/card/Card";
//import { UserIconWithName } from "../../molecules/user/UserIconWithName";

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

type Props = {
  question: string;
  answer: string;
};

export const WordCard: VFC<Props> = memo((props) => {
  const { question, answer } = props;
  return (
    <li>
      <div className="list-row">
        <p className="todo-title">{question}</p>
        <p className="todo-title">{answer}</p>
        <button>完了</button>
        <button>削除</button>
      </div>
    </li>
  );
});
