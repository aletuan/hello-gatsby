import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import GBNavbar from '../navbar'

const TemplateWrapper = ({ children, data }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <GBNavbar />
        <div className='pageContent'>{children}</div>
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
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

export default TemplateWrapper