/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { SigninMainWrapper } from "./signinPage.style";
import { useNavigate } from 'react-router-dom'; 

import SignInMent from "../../components/signin/signinMent";
import SignInBtn from "../../components/signin/nextBtn";
import InputName from "../../components/signin/inputName";
import InputPw from "../../components/signin/inputPw";
import InputHobby from "../../components/signin/inputHobby";

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    hobby: "",
  });

  const navigate = useNavigate(); 

  const handleNextClick = async () => {
    if (step === 3) {
      try {
        const response = await fetch("http://211.188.53.75:8080/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userData.username,
            password: userData.password,
            hobby: userData.hobby,
          }),
        });
        const data = await response.json();

        if (data.result) {
          alert(`회원가입 성공! 회원번호: ${data.result.no}`);
          navigate('/');
        } else if (data.code === "00") {
          console.log("회원가입 실패: 에러 발생");
        }
      } catch (error) {
        console.error("API 호출 실패:", error);
      }
    } else {
      setStep(prevStep => prevStep + 1);
      setIsButtonEnabled(false);
    }
  };

  const buttonText = step === 3 ? "회원가입" : "다음";

  const handleInputChange = (field: string, value: string) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div css={SigninMainWrapper}>
      <SignInMent />
      
      {step === 1 && <InputName onValid={setIsButtonEnabled} onChange={(value) => handleInputChange("username", value)} />}
      {step === 2 && <InputPw onValid={setIsButtonEnabled} onChange={(value) => handleInputChange("password", value)} />}
      {step === 3 && <InputHobby onValid={setIsButtonEnabled} onChange={(value) => handleInputChange("hobby", value)} />}
      
      <SignInBtn onClick={handleNextClick} isButtonEnabled={isButtonEnabled} buttonText={buttonText} />
    </div>
  );
};

export default SignIn;
