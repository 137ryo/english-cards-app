import { VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type Props = {
  children: string;
  onChange: () => void;
  onClick: () => void;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;

export const AddButton: VFC<Props> = (props) => {
  const { children, onChange, onClick } = props;
  return (
    <SButton onChange={onChange} onClick={onClick}>
      {children}
    </SButton>
  );
};
