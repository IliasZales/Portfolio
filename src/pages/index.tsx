import React from "react"
import Layout from "../components/layout/main/layout"

import PicContainer from "../components/picContainer/PicContainer"
import SEO from "../components/util/seo/Seo"

const IndexPage = () => (
  <Layout title="Portfolio" pageName="Home" description="Portfolio Home" type="kp" image="no">

    <SEO title="Ilias Zales Portfolio" metaDescription='Ilias Zales Software-Developer' />

    <PicContainer />
  </Layout>


)

export default IndexPage
