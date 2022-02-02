import styled from "styled-components";

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

const SP = styled.p`
  margin: 0 8px;
`;

export const TopHeader = () => {
  return (
    <SHeader>
      <SP>English Card App</SP>
    </SHeader>
  );
};
