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
                    // onMouseEnter={setColor}
                    id="leftcoldataline"
                  >
                    <div className="title-col-content">{post.title}</div>
                    <div className="title-col-content">
                      {post.createdAtFormatted}
                    </div>
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
