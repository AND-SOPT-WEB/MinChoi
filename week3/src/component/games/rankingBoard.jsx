import React, { useEffect, useState } from 'react';
import * as S from './styled';

function RankingBoard() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchGameData = () => {
      const storedData = JSON.parse(localStorage.getItem('gameData')) || [];
      setGameData(storedData);
    };

    fetchGameData();
  }, []);

  const handleReset = () => {
    localStorage.removeItem('gameData');
    setGameData([]);
  };

  const sortedGameData = [...gameData].sort((a, b) => a.playTime - b.playTime);

  return (
    <S.RankingBoardContainer>
      <h2>랭킹 보드</h2>
      <S.ResetButton onClick={handleReset}>초기화</S.ResetButton>
      {sortedGameData.length > 0 ? (
        <S.Table>
          <thead>
            <tr>
              <th>타임스탬프</th>
              <th>레벨</th>
              <th>플레이 시간</th>
            </tr>
          </thead>
          <tbody>
            {sortedGameData.map((data, index) => (
              <tr key={index}>
                <td>{data.currentTime}</td>
                <td>{data.level}</td>
                <td>{data.playTime}초</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      ) : (
        <S.NoDataMessage>저장된 게임 정보가 없어요🥲</S.NoDataMessage>
      )}
    </S.RankingBoardContainer>
  );
}

export default RankingBoard;