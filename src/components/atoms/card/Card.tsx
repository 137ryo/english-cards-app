import styled from "styled-components";
import { VFC, ReactNode } from "react";

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 10px;
  padding: 16px;
`;

type Props = {
  children: ReactNode;
};

export const Card: VFC<Props> = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};
