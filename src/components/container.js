import React from "react";
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
            title
          }
        }
      }
    `
  }
  
  render={(data) => (
    <div className={styles.container}>
        <header style={{ marginBottom: `1.5rem`, marginTop: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: `inline` }}>
                  {data.site.siteMetadata.title}
              </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        <hr />
        {children}
    </div>
  )}

  />
)
