import React from "react"
import Layout from "../components/layout/main/layout"
import Image from "../components/util/image/image"
import SEO from "../components/util/seo/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="SEO Title Home" metaDescription='SEO Desc Home' />
    <div className="bg-red-500"><h1 className="text-grey text-center">Hello World</h1></div>
    <Image imageName='gatsby-astronaut.png' maxWidth={500} className='test' />
    <Image imageName='gatsby-astronaut.png' maxWidth={250} className='karim' />
    <Image imageName='gatsby-icon.png' />
    <Image imageName='gatsby-icon.png' maxWidth={1000} />
  </Layout>
)

export default IndexPage
