/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Header from "../../components/mypage/header";
import Hobby from "../../components/mypage/hobby";
import MyProfile from "../../components/mypage/myprofile";

const MyPage = () => {
  const [currentTab, setCurrentTab] = useState("hobby");

  return (
    <>
      <Header setCurrentTab={setCurrentTab} />
      {currentTab === "hobby" && <Hobby />}
      {currentTab === "profile" && <MyProfile />}
    </>
  );
};

export default MyPage;