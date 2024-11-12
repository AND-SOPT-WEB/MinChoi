/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { SigninNameWrapper, inputText, inputName, errorMessage } from "./signin.style";

const InputName = ({ onValid, onChange }: { onValid: (valid: boolean) => void, onChange: (value: string) => void }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    onChange(newName);

    if (newName.length > 8) {
      setError("이름은 8자 이하로 입력해주세요.");
      onValid(false);
    } else {
      setError("");
      onValid(newName.length > 0);
    }
  };

  return (
    <div css={SigninNameWrapper}>
      <p css={inputName}>이름</p>
      <input
        css={inputText}
        placeholder="사용자 이름을 입력해주세요"
        value={name}
        onChange={handleChange}
      />
      {error && <p css={errorMessage}>{error}</p>}
    </div>
  );
};

export default InputName;