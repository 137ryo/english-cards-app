// import { AddButton } from "../atoms/button/AddButton";
// import { Input } from "../atoms/input/Input";
// import styled from "styled-components";
// import { memo, useState, VFC } from "react";

// const SContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const SButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;

//   background-color: #fff;
//   box-shadow: #ddd 0px 0px 4px 2px;
//   border-radius: 10px;
// `;
// // const SButtonArea = styled.div`
// //   display: flex;
// //   align-items: center;
// // `;

// type Props = {
//   onChange: () => void;
//   onClick: () => void;
// };

// export const AddInputArea: VFC<Props> = memo((props) => {
//   const { onChange, onClick } = props;

//   const [QuestionWord, serQuestionWord] = useState("");

//   const [AnswerWord, serAnswerWord] = useState("");

//   return (
//     <SContainer>
//       <SButtonWrapper>
//         <Input value={QuestionWord} placeholder="英単語を入力" />
//         <br />
//         <Input value={AnswerWord} placeholder="答えを入力" />
//         <br />
//         <AddButton onChange={onChange} onClick={onClick}>
//           追加
//         </AddButton>
//       </SButtonWrapper>
//     </SContainer>
//   );
// });
