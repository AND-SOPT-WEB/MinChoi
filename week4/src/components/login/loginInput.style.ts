import { Theme, css } from '@emotion/react';

export const loginInputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 13rem;
`;

export const mainMent = (theme: Theme ) => css`
  font-size: ${theme.text.title.fontSize};
  font-family: 'NanumB';
  margin-bottom: 2rem;
`;

export const idInput = (theme: Theme ) => css`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #D9D9D9; 
  outline: none;
  margin-bottom: 0.2rem;
  font-family: 'NanumL';
  font-size: ${theme.text.content.fontSize};
`;

export const pwInput =  (theme: Theme ) => css`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #D9D9D9; 
  outline: none;
  font-family: 'NanumL';
  font-size: ${theme.text.content.fontSize};
`;

export const loginBtn = (theme: Theme) => css`
  width: 100%;
  height: 2rem;
  border: 0.5rem;
  background-color: ${theme.colors.green};
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-family: 'NanumR';
  transition: background-color 0.3s ease; 
  cursor:pointer;

  &:hover {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white}
  }
`;


export const signInBtn = (theme: Theme )=> css`
  width: 100%;
  height: 2rem;
  border: 0.5rem;
  background-color: ${theme.colors.gray};
  border-radius: 0.5rem;
  margin-top: 0.2rem;
  font-family: 'NanumR';
  color: ${theme.colors.white};
  cursor:pointer;

  &:hover {
    background-color: #D1A1E0;
  }
`;