// src/App.js

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import AllPosts from './components/AllPosts.js'
import MainMenu from './components/MainMenu.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainMenu />} path="/*" />
        {/* <Route element={<MainMenu />} path="/:slug" /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App
