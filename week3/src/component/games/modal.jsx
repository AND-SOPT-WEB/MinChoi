import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './styled';

function Modal({ isOpen, onClose, time }) {
    if (!isOpen) return null; 

    return ReactDOM.createPortal(
        <S.ModalOverlay>
            <S.ModalContent>
                <h2>게임 종료</h2>
                <p>소요 시간: {typeof time === 'number' ? time.toFixed(2) : '0.00'}초</p>
                <button onClick={onClose}>닫기</button>
            </S.ModalContent>
        </S.ModalOverlay>,
        document.getElementById('modal-root') 
    );
}

export default Modal;
