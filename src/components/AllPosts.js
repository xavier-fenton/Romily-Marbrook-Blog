// src/components/AllPosts.js

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

//  How this works:
//  We need React Hooks = useState to set the state of our data. Then useEffect  to fetch our data.
//  Imported link to linking to our single blog posts.
//  Import the sanityClient so we can fetch our data

// * sanityClient function *
//an imported function which  we can dot into neccessary things such as fetch. Our fetch is in *strings* (neccesary data).
export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null) //1. setting our state

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
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={'/' + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  )
}
