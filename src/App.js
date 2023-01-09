// src/App.js

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import AllPosts from './components/AllPosts.js'
import MainMenu from './components/MainMenu.js'

import OnePost from './components/OnePost.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainMenu />} path="/" exact />
        <Route element={<OnePost />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  )
}
export default App
