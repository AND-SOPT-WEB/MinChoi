import { css } from '@emotion/react';
import Reset from './reset';

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    width: 100%;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  select {
    background: #fff;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    background-color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: 'NanumB';
    src: url('/fonts/NanumSquareRoundB.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumR';
    src: url('/fonts/NanumSquareRoundR.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumL';
    src: url('/fonts/NanumSquareRoundL.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;

export default GlobalStyle;