import React, { useState, useEffect } from 'react';
import * as S from './styled';
import Modal from './modal';

function GameBoard({ startTimer, stopTimer, resetTimer }) { 
    const [cards, setCards] = useState([]);
    const [clickedNumbers, setClickedNumbers] = useState(new Set());
    const [currentClick, setCurrentClick] = useState(1);
    const [usedNumbers, setUsedNumbers] = useState(new Set());
    const [isGameOver, setIsGameOver] = useState(false);
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(1);

    const startCards = () => {
        const initialNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
        const mixNumbers = initialNumbers.sort(() => Math.random() - 0.5);

        const threeGrid = [];
        for (let i = 0; i < 9; i += 3) {
            threeGrid.push(mixNumbers.slice(i, i + 3));
        }

        setCards(threeGrid);
    };

    const createNewCard = () => {
        let randomAfterNumber;
        do {
            randomAfterNumber = Math.floor(Math.random() * 9) + 10;
        } while (usedNumbers.has(randomAfterNumber));

        setUsedNumbers((prev) => new Set(prev).add(randomAfterNumber));
        return randomAfterNumber;
    };

    const handleCardClick = (num, rowIndex, colIndex) => {
        if (num === currentClick) {
            if (currentClick === 1) {
                const newIntervalId = setInterval(() => setTime(prev => prev + 0.01), 10);
                setIntervalId(newIntervalId);
                startTimer();
            }

            setClickedNumbers((prev) => new Set(prev).add(num));

            if (num >= 10) {
                const updatedCards = cards.map((row, rIdx) =>
                    row.map((card, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? '' : card))
                );
                setCards(updatedCards);
            } else {
                const randomAfterNumber = createNewCard();
                const updatedCards = cards.map((row, rIdx) =>
                    row.map((card, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? randomAfterNumber : card))
                );
                setCards(updatedCards);
            }

            setCurrentClick(prev => prev + 1);

            if (currentClick === 18) {
                clearInterval(intervalId);
                stopTimer();
                setIsGameOver(true);
            }
        } else {
            alert("틀렸어요🥲\n" + currentClick + "를 클릭하세요 !");

        }
    };

    const closeModal = () => {
        const currentTime = new Date().toLocaleString();
        const existingData = JSON.parse(localStorage.getItem('gameData')) || [];
        existingData.push({
            currentTime,
            level: currentLevel,
            playTime: time.toFixed(2) 
        });
        localStorage.setItem('gameData', JSON.stringify(existingData));

        setIsGameOver(false);
        setTime(0);
        setCurrentClick(1);
        setClickedNumbers(new Set());
        setUsedNumbers(new Set());
        resetTimer(); 
        startCards();
    };

    useEffect(() => {
        startCards();
    }, []);

    return (
    <S.NextNumber>다음 숫자 : {currentClick}
        <S.Board>
            {cards.map((row, rowIndex) => (
                <S.Row key={rowIndex}>
                    {row.map((num, colIndex) => (
                        <S.Col key={colIndex} onClick={() => handleCardClick(num, rowIndex, colIndex)}>
                            {num}
                        </S.Col>
                    ))}
                </S.Row>
            ))}
            <Modal isOpen={isGameOver} onClose={closeModal} time={time} />
        </S.Board>
    </S.NextNumber>
    );
}

export default GameBoard;