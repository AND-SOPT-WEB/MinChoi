import React, { useState, useEffect } from 'react';
import * as S from "./styled";
import Header from '../../component/games/header';
import GameBoard from '../../component/games/gameBoard';
import RankingBoard from '../../component/games/rankingBoard';

function Game() {
  const [time, setTime] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [activeButton, setActiveButton] = useState("game");

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setTime((prevTime) => parseFloat((prevTime + 0.01).toFixed(2)));
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isTimerActive]);

  const startTimer = () => {
    setIsTimerActive(true);
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  return (
    <S.PageContainer>
      <Header time={time} activeButton={activeButton} setActiveButton={setActiveButton} /> 
      
      {activeButton === "game" ? (
        <GameBoard startTimer={startTimer} stopTimer={stopTimer} />
      ) : (
        <RankingBoard />
      )}
    </S.PageContainer>
  );
}

export default Game;
