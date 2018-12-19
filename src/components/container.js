import React from "react";
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import styles from "./container.module.css"

export default ({ data, children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `
  }
  
  render={({
    site: {
      siteMetadata: { siteUrl, title },
    },
  }) => (
  <div className={styles.container}>

    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={siteUrl} />
    </Helmet>

    <Header title={title} />    
    <hr />
    {children}
  </div>
  )}

  />
)
