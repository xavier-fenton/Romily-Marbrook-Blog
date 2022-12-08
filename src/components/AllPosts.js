// src/components/AllPosts.js

import imageUrlBuilder from '@sanity/image-url'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'
import '../App.scss'
import MainPage from './MainPage.js'

//  How this works:
//  We need React Hooks = useState to set the state of our data. Then useEffect  to fetch our data.
//  Imported link to linking to our single blog posts.
//  Import the sanityClient so we can fetch our data

// * sanityClient function *
//an imported function which  we can dot into neccessary things such as fetch. Our fetch is in *strings* (neccesary data).

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState() //1. setting our state

  useEffect(() => {
    //2. useEffect to fetch our data.
    sanityClient
      .fetch(
        `*[_type == "post"]{ 
        title, 
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <MainPage />
      <div>
        <div>
          <div className="allTitles">
            {allPostsData
              ? allPostsData.map((post, index) => (
                  <Link
                    className="Links"
                    to={'/' + post.slug.current}
                    key={post.slug.current}
                  >




                    <span key={index}>
                      <a href={'/' + post.slug.current} className="atag">
                        <span className="titles">{post.title}</span>
                        <div className="circle"></div>
                      </a>

                      {!post.mainImage ||
                        !(
                          <img
                            src={urlFor(post.mainImage).width(250).url()}
                            alt=""
                          />
                        )}
                    </span>



                    
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  )
}
