import { Theme, css } from '@emotion/react';

export const SigninInputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 13rem;
`;

export const SigninNameWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  max-width: 13rem;
  gap:0.5rem;
`;

export const SigninPwWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  max-width: 13rem;
`;

export const SigninHobbyWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  max-width: 13rem;
  gap:0.5rem;
`;

export const SignInTitle = (theme: Theme) => css`
  font-family: 'NanumB';
  font-size: ${theme.text.title.fontSize};
  position: fixed;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;


export const NextBtn = (theme: Theme )=> css`
  width: 100%;
  height: 2rem;
  border: 0.5rem;
  background-color: ${theme.colors.gray};
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-family: 'NanumR';
  color: ${theme.colors.white};
  cursor:pointer;
`;

export const inputName = (theme: Theme ) => css`
  font-family: 'NanumB';
  font-size: ${theme.text.content.fontSize};
`;

export const inputText = (theme: Theme ) => css`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #D9D9D9; 
  outline: none;
  margin-bottom: 0.1rem;
  font-family: 'NanumL';
  font-size: ${theme.text.content.fontSize};
`;

export const inputPw = (theme: Theme ) => css`
  font-family: 'NanumB';
  font-size: ${theme.text.content.fontSize};
  margin-bottom: 0.5rem;
`;

export const inputHobby = (theme: Theme ) => css`
  font-family: 'NanumB';
  font-size: ${theme.text.content.fontSize};
`;

export const link = (theme: Theme ) => css`
  font-family: 'NanumR';
  font-size: ${theme.text.content.fontSize};
  margin-top: 0.5rem;
`;

export const errorMessage = (theme: Theme ) =>  css`
  font-family: 'NanumR';
  font-size: ${theme.text.content.fontSize};
  color: red;
`;