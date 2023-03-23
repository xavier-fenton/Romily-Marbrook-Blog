import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client.js'
// import '../../App.scss'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Child = ({
  post,
  index,
  to,
  active,
  // boolState,
  // handleClick,
  // setBoolState,
}) => {
  const [boolState, setBoolState] = useState('false')

  function handleClick() {
    // e.preventDefault()
    let doc = document.getElementById('land-cont')
    // console.log(doc)
    doc.style.display = 'none'
    let gifLoader = document.getElementById('gif-loader')
    gifLoader.style.display = 'block'
    let leftDoc = document.getElementById('left-contain')

    if (boolState === 'false') {
      leftDoc.style.width = '8%'
      setBoolState('true')
    } else if (boolState === 'true') {
      leftDoc.style.width = '450px'
      setBoolState('false')
    }
    // console.log(e.target)
  }

  return (
    <>
      <Link className="Links" to={to} key={post.slug.current}>
        <span key={index}>
          <div
            className={`left-col-dataline ${active ? 'active' : 'hover-1'}`}
            id="leftcoldataline"
            onClick={handleClick}
            bool={boolState}
          >
            <div className="title-col-content">{post.title}</div>
          </div>
        </span>

        {!post.mainImage || (
          <img src={urlFor(post.mainImage).width(250).url()} alt="" />
        )}
      </Link>
    </>
  )
}

export default Child
