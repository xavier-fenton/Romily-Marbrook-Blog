// src/components/AllPosts.js

import imageUrlBuilder from '@sanity/image-url'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sanityClient from '../client.js'
import '../App.scss'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function AllPosts() {
  const location = useLocation()
  const [allPostsData, setAllPosts] = useState()

  function handleClick() {
    let doc = document.getElementById('land-cont')
    // console.log(doc)
    doc.style.display = 'none'
    let gifLoader = document.getElementById('gif-loader')
    gifLoader.style.display = 'block'

    let leftDoc = document.getElementById('left-contain')
    leftDoc.style.width = '8%'
  }

  useEffect(() => {
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
        setAllPosts(data)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      {allPostsData
        ? allPostsData.map((post, index) => {
            const to = '/' + post.slug.current
            const active = location.pathname === to

            return (
              <Link className="Links" to={to} key={post.slug.current}>
                <span key={index}>
                  <div
                    className={`left-col-dataline ${
                      active ? 'active' : 'hover-1'
                    } `}
                    id="leftcoldataline"
                    onClick={handleClick}
                  >
                    <div className="title-col-content">{post.title}</div>
                  </div>
                </span>

                {!post.mainImage || (
                  <img src={urlFor(post.mainImage).width(250).url()} alt="" />
                )}
              </Link>
            )
          })
        : null}
    </>
  )
}
