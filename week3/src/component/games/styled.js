import styled from 'styled-components';

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
  color: #333;
  padding-right: 1rem;
`;

export const Board = styled.div`
  margin-top: 20px; /* 게임 보드와 Header 간의 간격 조정 */
  display: flex; /* 게임 보드의 Flex 설정 */
  justify-content: center; /* 중앙 정렬 */
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 그리드 */
  gap: 10px; /* 그리드 아이템 간격 설정 */
`;

export const Box = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  width: 100px; /* 박스 너비 설정 */
  height: 100px; /* 박스 높이 설정 */
  background-color: lightblue; /* 박스 배경색 */
  border: 1px solid blue; /* 테두리 설정 */
  border-radius: 8px; /* 둥근 모서리 설정 */
  font-size: 1.5rem; /* 글자 크기 설정 */
  cursor: pointer; /* 마우스 커서 변경 */

  &:hover {
    background-color: deepskyblue; /* hover 시 배경색 변경 */
  }
`;



export const NextNumber = styled.div`
  // 스타일 정의
`;
