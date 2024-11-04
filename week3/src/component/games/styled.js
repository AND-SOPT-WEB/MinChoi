import styled from '@emotion/styled';

//header.jsx
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: pink;
  width: 100%;
  padding: 1rem;
  height: 5rem;
`;

export const HeaderMent = styled.div`
  width: 5rem;
  font-family: 'NanumB';
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonGame = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border:0;
  width: 5rem;
  background-color: ${({ isActive }) => (isActive ? 'beige' : 'pink')};

  &:focus {
    outline: none; 
  }
`;

export const ButtonRanking = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 5rem;
  background-color: ${({ isActive }) => (isActive ? 'beige' : 'pink')};

  &:focus {
    outline: none;
  }
`;

export const Dropdown = styled.div`
  select {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    &:focus {
    outline: none;
  }}
`;

export const Timer = styled.div`
  font-size: 1rem;
  width:5rem;
  color: #333;
  padding-right: 1rem;
`;

//gameBoard.jsx
export const Board = styled.div`
  margin-top: 2rem;
  width: 12rem;
  height: 12rem; 
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex; 
  flex: 1;
  gap: 0.4rem;
  margin-bottom: 0.4rem ;
`;

export const Col = styled.div`
  width: 50%;
  height: 100%; 
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
`;

export const NextNumber= styled.div`
  font-family: 'NanumB';
  margin-top: 2rem;
`;

//modal.jsx
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
`;

//rankingBoard.jsx
export const RankingBoardContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width:70%;
  min-width: 25rem;
  max-width: 40rem;
  margin: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: pink;
  }
`;

export const NoDataMessage = styled.p`
  text-align: center;
  color: #D9D9D9;
`;

export const ResetButton = styled.button`
  background-color: #FFB6C1;
  width:5rem;
  margin-top: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px; 

  &:hover {
    background-color: #FF1493;
  }
`;