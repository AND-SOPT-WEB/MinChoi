// import { useState } from 'react'
import './App.css'
import ProfileCard from './component/ProfileCard'
import Game from './pages/games/game'
import GlobalStyle from './styles/global';

function App() {

  return (
    <>
    <GlobalStyle />
      {/* <ProfileCard /> */}
      <Game />
    </>
  )
}

export default App