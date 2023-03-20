// src/components/OnePost.js

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import LandingPage from './subcomponents/LandingPage.js'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function OnePost() {
  const [postData, setPostData] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error)
  }, [slug])

  if (!postData && <LandingPage />)
    return (
      <>
        {/* <LandingPage style={{ display: 'none' }} /> */}
        <div
          class="tenor-gif-embed"
          data-postid="15764824"
          data-share-method="host"
          data-aspect-ratio="1.1985"
          data-width="100%"
        >
          <a href="https://tenor.com/view/kate-wings-fly-white-angel-wings-gif-15764824">
            Kate Wings Sticker
          </a>
          from{' '}
          <a href="https://tenor.com/search/kate-stickers">Kate Stickers</a>
        </div>
      </>
    )

  return (
    <div className="post-wrapper" key={postData.title}>
      <div>
        <h2>{postData.title}</h2>
        <div>
          {!postData.authorImage || (
            <img
              src={urlFor(postData.authorImage).width(100).url()}
              alt="Author is Kap"
            />
          )}
          <h4>{postData.name}</h4>
        </div>
      </div>
      {!postData.mainImage || (
        <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      )}
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  )
}
