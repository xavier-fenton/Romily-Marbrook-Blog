// src/components/AllPosts.js

import imageUrlBuilder from '@sanity/image-url'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'
import '../App.scss'

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
        _createdAt,
  
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => {
        data.forEach((item) => {
          item.createdAtFormatted = new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          }).format(new Date(item._createdAt))
        })
        setAllPosts(data)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      {allPostsData
        ? allPostsData.map((post, index) => (
            <Link
              className="Links"
              to={'/' + post.slug.current}
              key={post.slug.current}
            >
              <span key={index}>
                <span href={'/' + post.slug.current} className="atag">
                  <div className="left-col-dataline">
                    <div className="title-col-content">{post.title}</div>
                    <div className="title-col-content">
                      {post.createdAtFormatted}

                      {/* make a funtion which converts the date*/}
                    </div>
                  </div>
                </span>

                {!post.mainImage || (
                  <img src={urlFor(post.mainImage).width(250).url()} alt="" />
                )}
              </span>
            </Link>
          ))
        : null}
    </>
  )
}
