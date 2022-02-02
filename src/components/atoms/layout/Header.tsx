import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Top</SLink>
      <SLink to="/cards">Card</SLink>
      <SLink to="/setting">設定</SLink>
    </SHeader>
  );
};
