import React, { VFC, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CommonButton } from "../atoms/button/CommonButton";
//import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../hooks/userState";

const SContainer = styled.div`
  text-align: center;
`;

export const Top: VFC = () => {
  const history = useHistory();

  //const { setUserInfo } = useContext(UserContext);

  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/cards");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/cards");
  };

  return (
    <SContainer>
      <h2>TOPページ</h2>
      <CommonButton onClick={onClickAdmin}>管理者ユーザ</CommonButton>
      <br />
      <br />
      <CommonButton onClick={onClickGeneral}>一般ユーザ</CommonButton>
    </SContainer>
  );
};
