import React, { useState, useEffect } from 'react';
import * as S from './styled'; // styled-components 사용

const GameBoard = ({ setTime, setIsActive, level }) => {
    const totalNumbers = 18;
    const initialCount = totalNumbers / 2; // 9
    const [numbers, setNumbers] = useState([]); // 전체 숫자 배열
    const [visibleNumbers, setVisibleNumbers] = useState([]); // 화면에 보이는 숫자
    const [nextNumber, setNextNumber] = useState(1); // 다음 클릭해야 할 숫자
    const [clickedNumbers, setClickedNumbers] = useState(new Set()); // 클릭한 숫자
    const [timer, setTimer] = useState(0); // 타이머
    const [isGameActive, setIsGameActive] = useState(false); // 게임 활성 상태

    // 랜덤으로 1~9까지의 숫자를 생성
    const generateRandomInitialNumbers = () => {
        const initialNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
        for (let i = initialNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [initialNumbers[i], initialNumbers[j]] = [initialNumbers[j], initialNumbers[i]];
        }
        return initialNumbers;
    };

    const generateRandomNumbers = (count, excludeNumbers) => {
        const nums = Array.from({ length: totalNumbers }, (_, i) => i + 1).filter(num => !excludeNumbers.includes(num));
        const randomNumbers = [];
        for (let i = 0; i < count; i++) {
            if (nums.length === 0) break; // 사용할 숫자가 없으면 종료
            const randomIndex = Math.floor(Math.random() * nums.length);
            randomNumbers.push(nums[randomIndex]);
            nums.splice(randomIndex, 1); // 선택한 숫자는 배열에서 제거
        }
        return randomNumbers;
    };

    const resetGame = () => {
        const initialNumbers = generateRandomInitialNumbers(); // 랜덤으로 초기 숫자 생성
        setNumbers(initialNumbers.concat(generateRandomNumbers(9, []))); // 전체 숫자 배열을 1~9와 10~18로 구성
        setVisibleNumbers(initialNumbers); // 처음 보이는 숫자는 랜덤으로 배치된 1~9
        setClickedNumbers(new Set());
        setNextNumber(1);
        setTimer(0);
        setIsGameActive(false);
        setIsActive(false);
    };

    useEffect(() => {
        resetGame();
    }, [level]);

    useEffect(() => {
        let interval;
        if (isGameActive) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 0.01);
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isGameActive]);

    const handleClick = (number) => {
        if (number === 1 && !isGameActive) {
            setIsActive(true);
            setIsGameActive(true);
        }

        // 클릭한 숫자가 현재 클릭해야 할 숫자(nextNumber)와 같고, 아직 클릭하지 않은 경우
        if (number === nextNumber && !clickedNumbers.has(number)) {
            // 클릭된 숫자를 저장
            setClickedNumbers((prev) => new Set(prev).add(number));

            // 현재 숫자 자리 랜덤으로 채우기 (10~18 중 랜덤)
            const newNumber = generateRandomNumbers(1, Array.from(clickedNumbers)).pop();
            
            // 클릭된 숫자는 visibleNumbers에서 제거하고, 새로운 숫자로 대체
            setVisibleNumbers((prev) => 
                prev.map((num) => (num === number ? newNumber : num))
            );

            // 다음 숫자로 업데이트
            setNextNumber(nextNumber + 1);

            // 모든 숫자를 클릭한 경우
            if (clickedNumbers.size + 1 === totalNumbers) { // +1은 방금 클릭한 숫자
                setIsActive(false);
                setIsGameActive(false);
                alert(`게임 종료! 걸린 시간: ${timer.toFixed(2)}초`); // 혹은 UI에 표시
                saveGameData(timer);
                resetGame();
            }
        }
    };

    const saveGameData = (time) => {
        const currentTime = new Date().toLocaleString();
        const gameData = {
            time: currentTime,
            level: level,
            playTime: time,
        };
        localStorage.setItem(`gameData-${currentTime}`, JSON.stringify(gameData));
    };

    return (
        <S.Board>
            <S.Header>
                <S.NextNumber>다음 클릭 숫자: {nextNumber}</S.NextNumber>
                <S.Timer>타이머: {timer.toFixed(2)}초</S.Timer>
            </S.Header>
            <S.Grid>
                {visibleNumbers.map((number) => (
                    <S.Box key={number} onClick={() => handleClick(number)}>
                        {number}
                    </S.Box>
                ))}
            </S.Grid>
        </S.Board>
    );
};

export default GameBoard;
