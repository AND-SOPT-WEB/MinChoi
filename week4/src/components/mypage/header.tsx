/** @jsxImportSource @emotion/react */
import { MyWrapper, myMent, hobbyBtn, profileBtn, MyLeft, logout } from "./mypage";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div css={MyWrapper}>
      <div css={MyLeft}>
        <p css={myMent}>마이페이지</p>
        <div css={hobbyBtn} onClick={() => setCurrentTab("hobby")}>취미</div>
        <div css={profileBtn} onClick={() => setCurrentTab("profile")}>내 정보</div>
      </div>
      <button css={logout} onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Header;