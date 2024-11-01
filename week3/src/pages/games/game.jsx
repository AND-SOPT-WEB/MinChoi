import React, { useState } from 'react';
import Header from '../../component/games/header'; // Header 컴포넌트 import
import GameBoard from '../../component/games/GameBoard'; // GameBoard 컴포넌트 import
import * as S from './styled'; // styled-components import

export const Game = () => {
  const [activeButton, setActiveButton] = useState("game");
  const [time, setTime] = useState(0); // 타이머 상태
  const [isActive, setIsActive] = useState(false); // 타이머 활성화 여부

  return (
    <S.PageContainer>
      <Header 
        activeButton={activeButton} 
        setActiveButton={setActiveButton}
        time={time} 
      />
      {activeButton === "game" && (
        <GameBoard
          setTime={setTime}
          setIsActive={setIsActive}
        />
      )}
    </S.PageContainer>
  );
};

export default Game;
