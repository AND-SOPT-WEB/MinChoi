/** @jsxImportSource @emotion/react */
import { useState } from "react";
import axios from "axios";
import { hobbyMain, MyWrappernew, myhobby, other, otherinput, hobbySearch } from "./mypage";

interface UpdateRequestData {
  hobby?: string;
  password?: string;
}

const MyProfile = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newHobby, setNewHobby] = useState("");
  const token = localStorage.getItem("token");

  const handleUpdate = async () => {
    if (!newPassword && !newHobby) {
      alert("변경할 정보를 입력해주세요.");
      return;
    }

    const requestData: UpdateRequestData = {}; 
    if (newPassword) requestData.password = newPassword;
    if (newHobby) requestData.hobby = newHobby;

    try {
      const response = await axios.put("http://211.188.53.75:8080/user", requestData, {
        headers: {
          token: token,
        },
      });

      if (response.data.code === "00") {
        alert("정보 변경에 실패했습니다.");
      } else {
        alert("정보가 성공적으로 변경되었습니다.");
      }
    } catch (error) {
      console.error("정보 변경 실패:", error);
      alert("정보 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div css={MyWrappernew}>
      <div css={hobbyMain}>내 정보 수정하기</div>
      <div css={myhobby}>새 비밀번호</div>
      <input
        css={otherinput}
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="새 비밀번호 입력"
      />
      <div css={other}>새 취미</div>
      <input
        css={otherinput}
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
        placeholder="새 취미 입력"
      />
      <button css={hobbySearch} onClick={handleUpdate}>변경하기</button>
    </div>
  );
};

export default MyProfile;