import React from 'react'
import '../css/mainmenu.scss'
import AllPosts from './AllPosts'

const MainMenu = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div>
          <p>ROMILYmarbrook</p> {/* Own Component */}
        </div>
        <AllPosts />
        <div>
          <p>Footer component</p>
          {/* Own Component */}
        </div>
      </div>
      {/*
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      */}
      <div className="right-container"></div> {/* Own Component */}
    </div>
  )
}

export default MainMenu
