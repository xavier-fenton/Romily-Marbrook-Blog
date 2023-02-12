import React, { useEffect, useState } from 'react'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const LandingPage = () => {
  const [postData, setPostData] = useState(null)
  // const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'landingpage']{
          title,
          body,
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error)
  }, [])

  if (!postData) return <div>loading....</div>

  return (
    <>
      <h1>{postData.title}</h1>
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </>
  )
}

export default LandingPage
