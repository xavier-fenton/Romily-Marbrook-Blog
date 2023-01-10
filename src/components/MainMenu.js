import React from 'react'
import '../css/mainmenu.scss'
import '../css/leftColumnsection.scss'
import AllPosts from './AllPosts'
import Footer from './Footer'

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

        <Footer />
      </div>
      {/*
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      */}
      <div className="right-container"></div> {/* Own Component */}
    </div>
  )
}

export default MainMenu
