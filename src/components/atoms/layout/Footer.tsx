import styled from "styled-components";

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Footer = () => {
  return <SFooter>&copy; 2021 test inc. </SFooter>;
};
