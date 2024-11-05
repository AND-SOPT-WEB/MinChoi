import { Global, css } from '@emotion/react';

const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  body,
  button,
  input,
  select,
  table,
  textarea {
    font-size: 16px;
    line-height: 20px;
    color: #202020;
    background-color: beige;
    width: 100%;
    font-family: "NanumR", -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
  }

  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }

  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }

  button {
    background-color: transparent;
  }

  fieldset,
  img {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  ol,
  ul {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  iframe {
    overflow: hidden;
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: top;
  }

  mark {
    background-color: transparent;
  }

  i {
    font-style: normal;
  }

  #root {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: none !important;
    min-height: 100vh;
    width: 100%;
    padding: 0;
  }

  @font-face {
  font-family: 'NanumB';
  src: url('/fonts/NanumSquareRoundB.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'NanumL';
  src: url('/fonts/NanumSquareRoundL.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'NanumR';
  src: url('/fonts/NanumSquareRoundR.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}



  html {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
    scroll-behavior: smooth;
    width: 100%;
  }


  html {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
  scroll-behavior: smooth;
  width: 100%;
}


  body {
    width: 100%;
    overflow-x: hidden;
    font-family: "NanumSquareRoundB", "NanumSquareRoundR", "NanumSquareRoundL", sans-serif;
  }
`;

const GlobalStyles = () => <Global styles={GlobalStyle} />;

export default GlobalStyles;
