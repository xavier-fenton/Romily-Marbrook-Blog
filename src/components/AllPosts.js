// src/components/AllPosts.js

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import sanityClient from '../client.js'
import '../App.scss'
import Child from './subcomponents/Child.js'

// const builder = imageUrlBuilder(sanityClient)
// function urlFor(source) {
//   return builder.image(source)
// }

export default function AllPosts() {
  const location = useLocation()
  const [allPostsData, setAllPosts] = useState()
  // const [boolState, setBoolState] = useState('false')

  // function handleClick() {
  //   let doc = document.getElementById('land-cont')
  //   // console.log(doc)
  //   doc.style.display = 'none'
  //   let gifLoader = document.getElementById('gif-loader')
  //   gifLoader.style.display = 'block'
  //   let leftDoc = document.getElementById('left-contain')

  //   if (boolState === 'false') {
  //     leftDoc.style.width = '8%'
  //     setBoolState('true')
  //   } else if (boolState === 'true') {
  //     leftDoc.style.width = '450px'
  //     setBoolState('false')
  //   }
  // }

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
              <Child
                post={post}
                index={index}
                to={to}
                active={active}

                // boolState={boolState}
                // setBoolState={setBoolState}
                // handleClick={handleClick}
              />
            )
          })
        : null}
    </>
  )
}
