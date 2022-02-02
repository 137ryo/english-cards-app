import { ReactNode, VFC } from "react";

import { Header } from "../atoms/layout/Header";

type Props = {
  children: ReactNode;
};

export const CommonLayout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
