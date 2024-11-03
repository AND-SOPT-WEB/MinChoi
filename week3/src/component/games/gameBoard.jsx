import React, { useState, useEffect } from 'react';
import * as S from './styled';

function GameBoard({ startTimer, stopTimer }) {
    const [cards, setCards] = useState([]);
    const [clickedNumbers, setClickedNumbers] = useState(new Set());
    const [currentClick, setCurrentClick] = useState(1); 
    const [usedNumbers, setUsedNumbers] = useState(new Set());

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
                stopTimer();
                alert("게임 종료");
            }
        } else {
            alert("잘못된 클릭입니다. " + currentClick + "를 클릭하세요.");
        }
    };

    useEffect(() => {
        startCards();
    }, []);
    
    return (
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
        </S.Board>
    );
}

export default GameBoard;