import { ReactNode, VFC } from "react";

import { TopHeader } from "../atoms/layout/TopHeader";
import { Footer } from "../atoms/layout/Footer";

type Props = {
  children: ReactNode;
};

export const TopPageLayout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <TopHeader />
      {children}
      <Footer />
    </>
  );
};
