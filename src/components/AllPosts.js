// src/components/AllPosts.js

import imageUrlBuilder from '@sanity/image-url'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'
import '../App.scss'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function AllPosts() {
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
        ? allPostsData.map((post, index) => (
            <Link
              className="Links"
              to={'/' + post.slug.current}
              key={post.slug.current}
            >
              <span key={index}>
                <div className="left-col-dataline">
                  <div className="title-col-content">{post.title}</div>
                  <div className="title-col-content">
                    {post.createdAtFormatted}
                  </div>
                </div>

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
