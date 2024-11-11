import { Theme, css } from '@emotion/react';

export const MyWrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: burlywood;
  height: 4rem;
  top:0;
  position: fixed;
`;
export const MyWrappernew = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const myMent = css`
`;

export const hobbyBtn = css`
  cursor: pointer;
`;

export const profileBtn = css`
  cursor: pointer;
`;

export const MyLeft = (theme: Theme) => css`
  display: flex;
  font-family: 'NanumB';
  gap:2rem;
  font-size: ${theme.text.title.fontSize};
  margin-left: 1rem;
`;

export const logout = (theme: Theme) => css`
  font-family: 'NanumB';
  font-size: ${theme.text.title.fontSize};
  margin-right: 1rem;
  background-color: burlywood;
  border: none;
  cursor: pointer;
`;

export const HobbyWrapper = css`
`;
export const hobbyMain = (theme: Theme) => css`
  font-family: "NanumB";
  font-size: ${theme.text.title.fontSize};
  justify-content: center;
  display: flex;
  margin-bottom: 5rem;
`;
export const myhobby = css`
  font-family: "NanumB";
  color: blueviolet;
`;
export const myhobbycontent = css`
  font-family: "NanumR";
  color: purple;
  margin-bottom: 2rem;
`;
export const other = css`
  font-family: "NanumB";
  color: blueviolet;
`;

export const othercontent = css`
  font-family: "NanumR";
  color: purple;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

export const hobbySearch =  (theme: Theme) => css`
background-color: brown;
border: none;
color: ${theme.colors.white};
font-family: 'NanumR';
height: 2rem;
cursor: pointer;
`;

export const otherbar = css`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 10rem;
`;

export const otherinput = css`
  border: none;
  outline: none;
  height: 2.3rem;
  font-family: 'NanumR';
`;