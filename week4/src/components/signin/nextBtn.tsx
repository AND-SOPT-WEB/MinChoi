/** @jsxImportSource @emotion/react */
import { SigninInputWrapper, NextBtn, link } from "./signin.style";
import { Link } from "react-router-dom";

const SignInBtn = ({ onClick, isButtonEnabled, buttonText }: { onClick: () => void, isButtonEnabled: boolean, buttonText: string }) => {
  return (
    <div css={SigninInputWrapper}>
      <button
        css={NextBtn}
        onClick={onClick}
        disabled={!isButtonEnabled}
        style={{ opacity: isButtonEnabled ? 1 : 0.5 }} 
      >
        {buttonText}
      </button>
      <div css={link}>
        이미 회원이신가요?{" "}
        <Link to="/" css={{ color: '#FF6347', textDecoration: 'none' }}>로그인</Link>
      </div>
    </div>
  );
};

export default SignInBtn;