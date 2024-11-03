import styled from '@emotion/styled';

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

export const Board = styled.div`
  margin-top: 5rem;
  width: 12rem;
  height: 12rem; 
  display: flex;
  flex-direction: column;
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

