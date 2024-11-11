/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { SigninHobbyWrapper, inputText, inputHobby, errorMessage } from "./signin.style";

const InputHobby = ({ onValid, onChange }: { onValid: (valid: boolean) => void, onChange: (value: string) => void }) => {
  const [hobby, setHobby] = useState("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHobby = e.target.value;
    setHobby(newHobby);
    onChange(newHobby); 

    if (newHobby.length > 8) {
      setError("취미는 8자 이하로 입력해주세요.");
      onValid(false);
    } else {
      setError("");
      onValid(newHobby.length > 0);
    }
  };

  return (
    <div css={SigninHobbyWrapper}>
      <p css={inputHobby}>취미</p>
      <input
        css={inputText}
        placeholder="취미를 입력해주세요"
        value={hobby}
        onChange={handleChange}
      />
      {error && <p css={errorMessage}>{error}</p>}
    </div>
  );
};

export default InputHobby;