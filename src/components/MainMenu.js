import React from 'react'
import '../css/mainmenu.scss'
import '../css/leftColumnsection.scss'
import AllPosts from './AllPosts'
import Footer from './subcomponents/Footer'
import Header from './subcomponents/Header'

const MainMenu = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div>
          <Header />
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
