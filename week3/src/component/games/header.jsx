import React, { useState } from 'react';
import * as S from "./styled";

function Header({ activeButton, setActiveButton, time, resetTimer }) {
  const [showHeaderRight, setShowHeaderRight] = useState(true);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setShowHeaderRight(button === "game");
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
      {showHeaderRight && ( 
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