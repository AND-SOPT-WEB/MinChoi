/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { SigninPwWrapper, inputText, inputPw, errorMessage } from "./signin.style";

const InputPw = ({ onValid, onChange }: { onValid: (valid: boolean) => void, onChange: (value: string) => void }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onChange(newPassword);

    if (newPassword.length > 8) {
      setError("비밀번호는 8자 이하로 입력해주세요.");
      onValid(false);
    } else {
      setError("");
      onValid(true);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (password !== newConfirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      onValid(false);
    } else {
      setError("");
      onValid(true);
    }
  };

  return (
    <div css={SigninPwWrapper}>
      <p css={inputPw}>비밀번호</p>
      <input
        type="password"
        css={inputText}
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        css={inputText}
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {error && <p css={errorMessage}>{error}</p>}
    </div>
  );
};

export default InputPw;