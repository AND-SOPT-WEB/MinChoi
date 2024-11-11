/** @jsxImportSource @emotion/react */
import { useState } from "react";
import axios from "axios";
import { loginInputWrapper, mainMent, idInput, pwInput, loginBtn, signInBtn } from "./loginInput.style";
import { Link, useNavigate } from "react-router-dom";

const LoginInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://211.188.53.75:8080/login", {
        username,
        password,
      });

      if (response.data.result) {
        const { token } = response.data.result;
        localStorage.setItem("token", token);
        navigate("/mypage");
      } else {
        setError("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setError("로그인 요청이 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div css={loginInputWrapper}>
      <p css={mainMent}>로그인</p>
      <input
        css={idInput}
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        css={pwInput}
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button css={loginBtn} onClick={handleLogin}>
        로그인
      </button>
      <Link to="/signin" css={{ width: '100%' }}>
        <button css={signInBtn}>회원가입</button>
      </Link>
    </div>
  );
};

export default LoginInput;