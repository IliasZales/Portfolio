import React from "react"
import Layout from "../components/layout/main/layout"

import PicContainer from "../components/picContainer/PicContainer"
import SEO from "../components/util/seo/Seo"

const IndexPage = () => (
  <Layout title="Portfolio" pageName="Portfolio" description="neue Seite" type="kp" image="no">

    <SEO title="SEO Title Home" metaDescription='SEO Desc Home' />

    <PicContainer />
  </Layout>


)

export default IndexPage
