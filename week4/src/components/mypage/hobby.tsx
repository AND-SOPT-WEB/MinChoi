/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import axios from "axios";
import { HobbyWrapper, hobbyMain, myhobby, other, myhobbycontent, otherinput, othercontent, otherbar, hobbySearch } from "./mypage";

const Hobby = () => {
  const [myHobby, setMyHobby] = useState<string>("");
  const [otherHobby, setOtherHobby] = useState<string>("");
  const [userNo, setUserNo] = useState<string>("");
  const [searchedNo, setSearchedNo] = useState<string>("");  
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const getMyHobby = async () => {
    if (!token) return;
    try {
      const response = await axios.get("http://211.188.53.75:8080/user/my-hobby", {
        headers: {
          token: token,
        },
      });

      if (response.data.result) {
        setMyHobby(response.data.result.hobby);
      } else {
        console.error("내 취미를 불러오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("API 호출 실패:", error);
    }
  };

  const getOtherHobby = async () => {
    if (!token || !userNo.trim()) return;
    try {
      const response = await axios.get(`http://211.188.53.75:8080/user/${userNo}/hobby`, {
        headers: {
          token: token,
        },
      });

      if (response.data.result) {
        setOtherHobby(response.data.result.hobby);
        setSearchedNo(userNo); 
      } else {
        alert("해당 번호의 취미가 존재하지 않습니다.");
        setOtherHobby("");  
        setSearchedNo(userNo);  
      }
    } catch (error) {
      console.error("API 호출 실패:", error);
      alert("해당 번호의 취미가 존재하지 않습니다.");
      setOtherHobby(""); 
      setSearchedNo(userNo);  
    }
  };

  useEffect(() => {
    if (token) getMyHobby();
  }, [token]);

  const handleSearch = () => {
    getOtherHobby();
  };

  return (
    <div css={HobbyWrapper}>
      <div css={hobbyMain}>취미</div>
      <div css={myhobby}>나의 취미</div>
      <div css={myhobbycontent}>{myHobby || "없습니다"}</div>
      
      <div css={other}>다른 사람의 취미</div>
      <div css={otherbar}>
        <input css={otherinput}
          type="text"
          placeholder="번호 입력"
          value={userNo}
          onChange={(e) => setUserNo(e.target.value)} 
        />
        <button css={hobbySearch} onClick={handleSearch}>검색</button>
      </div>
      <div css={othercontent}>
        {otherHobby ? `${searchedNo}번 사용자의 취미: ${otherHobby}` : ""}
      </div>
    </div>
  );
};

export default Hobby;