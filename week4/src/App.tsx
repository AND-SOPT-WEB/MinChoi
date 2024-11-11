import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global'; 
import Login from './pages/login/login';
import SignIn from './pages/signin/signin';
import MyPage from './pages/mypage/mypage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;