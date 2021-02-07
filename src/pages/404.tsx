import React from "react"

import Layout from "../components/layout/main/layout"
import SEO from "../components/util/seo/Seo"

const NotFoundPage = () => (
  <Layout title="404" pageName="Po4040rtfolio" description="not found" type="kp" image="no">
    <SEO title='404: Not found' metaDescription='SEO DESC - 404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
