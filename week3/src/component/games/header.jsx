import React, { useState } from 'react';
import * as S from "./styled";

function Header({ activeButton, setActiveButton, time }) {
  const [showHeaderRight, setShowHeaderRight] = useState(true); // HeaderRight의 상태 추가

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setShowHeaderRight(button === "game"); // 게임 버튼을 누르면 HeaderRight 보이기
  };

  return (
    <S.Header>
      <S.HeaderLeft>
        <S.HeaderMent>1 to 50</S.HeaderMent>
        <S.ButtonGame 
          onClick={() => handleButtonClick("game")}
          isActive={activeButton === "game"}
        >
          게임
        </S.ButtonGame>
        <S.ButtonRanking 
          onClick={() => handleButtonClick("ranking")}
          isActive={activeButton === "ranking"}
        >
          랭킹
        </S.ButtonRanking>
      </S.HeaderLeft>
      {showHeaderRight && ( // showHeaderRight가 true일 때만 HeaderRight 보이기
        <S.HeaderRight>
          <S.Dropdown>
            <select>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </S.Dropdown>
          <S.Timer>{time}초</S.Timer>
        </S.HeaderRight>
      )}
    </S.Header>
  );
}

export default Header;
