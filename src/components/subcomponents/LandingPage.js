import React, { useEffect, useState } from 'react'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import '../../css/landing.scss'

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
      <h1 className="landing-title">
        <center>{postData.title}</center>
      </h1>
      <div className="landing-page-content">
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
