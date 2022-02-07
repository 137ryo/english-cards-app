import { VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type Props = {
  children: string;
  onClick: () => void;
};

const SButton = styled(BaseButton)`
  background-color: #008cb4;
  margin: 5px;
`;

export const CommonButton: VFC<Props> = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};
