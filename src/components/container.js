import React from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

import { SimpleHeader } from "./header"
=======
import {Helmet} from "react-helmet";
>>>>>>> parent of 7604bca... refactor: Seperate Header component
import styles from "./container.module.css"
import { StaticQuery, Link, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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

<<<<<<< HEAD
    <SimpleHeader title={title} />
  
=======
    <header style={{ marginBottom: `1.5rem`, marginTop: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>
          {title}
        </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
>>>>>>> parent of 7604bca... refactor: Seperate Header component
    <hr />
    {children}
  </div>
  )}

  />
)
