import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../navbar'
import './index.scss'

const Layout = ({ children, data }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div>
        <Helmet title={data.site.siteMetadata.title} />
        <Navbar />
        <div className='pageContent'>{children}</div>
      </div>
    )} />
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout