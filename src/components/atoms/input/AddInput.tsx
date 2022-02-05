import { memo, VFC } from "react";
import styled from "styled-components";

const SInput = styled.input`
  padding: 6px 30px;
  border-radius: 9999px;
`;

type Props = {
  value: string;
  placeholder: string;
  onChange: any; // TODO anyから変更する
  disabled: boolean;
};

export const AddInput: VFC<Props> = memo((props) => {
  const { value, placeholder = "", onChange, disabled } = props;
  return (
    <SInput
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
});
