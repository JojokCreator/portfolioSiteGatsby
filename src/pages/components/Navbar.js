import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
        <h3>{ title }</h3>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Portfolio Projects</Link>
        </div>
    </nav>
  )
}
