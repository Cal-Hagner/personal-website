import React from 'react'

import Layout from '../containers/layout'
import SEO from '../components/seo/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <div style={{textAlign: 'center'}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

export default NotFoundPage
