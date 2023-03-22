import React from 'react'
import '../css/mainmenu.scss'
import '../css/leftColumnsection.scss'
import AllPosts from './AllPosts'
import Footer from './subcomponents/Footer'
import Header from './subcomponents/Header'
import { Routes, Route } from 'react-router-dom'
import OnePost from './OnePost'
import LandingPage from './subcomponents/LandingPage'

const MainMenu = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-container" id="left-contain">
          <div>
            <Header />
            {/* Own Component */}
          </div>
          <div className="allposts-column">
            <div className="fade"></div>
            <AllPosts />
          </div>
        </div>

        <div className="right-side">
          <div className="right-container">
            <LandingPage />
            <div className="inner-shadow"></div>
            <Routes>
              <Route element={<OnePost />} path="/:slug" />
            </Routes>
          </div>
          {/* <div className="about-section"></div> */}
        </div>
        {/* Own Component<Footer /> */}
      </div>
      <Footer />
    </>
  )
}

export default MainMenu
