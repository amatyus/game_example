import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Games from './pages/Games'
import Game from './pages/Game'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/:gameId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
