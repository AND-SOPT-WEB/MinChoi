import { useState } from 'react'
import { members } from "../data/member";
import styled from "@emotion/styled"

// 여기 컴포넌트에는 카드 형식만 만들고 App.jsx나 페이지에서 정보 넣고 돌리기

const ProfileCard = ({  }) => {

  return (
    <MainContainer>
      {members.map((k)=>{
      const [count, setCount] = useState(0)

      return(
        <Container>
        <div key={k.id}>
        <MemberName>{k.name}</MemberName>
        <MemberInfo>{k.englishName}</MemberInfo>
        <MemberInfo>{k.github}</MemberInfo>
        <Btn>
          <div>{count}</div>
          <button onClick={() => setCount((count) => count + 1)}>
            Like
          </button>
        </Btn>
        </div>
        </Container>
      )

      })}
    </MainContainer>
  )
}

export default ProfileCard;



const MainContainer= styled.div`
  display : flex ;
  justify-content: center;
  flex-wrap: wrap;
  gap:1rem;
`;

const Container = styled.div`
  width:10rem;
  height:10rem;
  background-color: #b0f0c6;
  border-radius: 1rem;
;`

const MemberName = styled.div`
  font-size:1.5rem;
  padding-top: 1rem;
;`

const MemberInfo = styled.div`
  font-size:1rem;
;`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:1rem;
  margin-top:0.5rem;
`;