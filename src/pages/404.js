import React from 'react'
import { object, shape } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
    </Layout>
  )
}

NotFoundPage.defaultProps = {
  data: {},
  location: {},
}

NotFoundPage.propTypes = {
  data: shape(object),
  location: shape(object),
}

export default NotFoundPage
