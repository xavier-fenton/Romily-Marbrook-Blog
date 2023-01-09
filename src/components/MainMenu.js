import React from 'react'
import '../css/mainmenu.scss'
import AllPosts from './AllPosts'

const MainMenu = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div>
          <p>ROMILYmarbrook</p>
        </div>
        <AllPosts />
        <div>
          <p>Footer component</p>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  )
}

export default MainMenu
