import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/index">{data.site.siteMetadata.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
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