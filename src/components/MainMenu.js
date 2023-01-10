import React from 'react'
import '../css/mainmenu.scss'
import AllPosts from './AllPosts'

const MainMenu = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div>
          <p className="left-cont-title">ROMILYmarbrook</p>
          {/* Own Component */}
        </div>
        <div className="allposts-column">
          <div className="fade"></div>
          <AllPosts />
        </div>

        <div className="footer-component">
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
