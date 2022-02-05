import { VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type Props = {
  children: string;
  onClick: () => void;
  disabled: boolean;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;

export const AddButton: VFC<Props> = (props) => {
  const { children, onClick, disabled } = props;
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  );
};
