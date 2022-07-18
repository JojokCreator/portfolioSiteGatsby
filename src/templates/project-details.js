import React from 'react'
import Layout from '../pages/components/Layout'
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from '../styles/project-details.module.css'
import { graphql, Link } from 'gatsby';
import { FaLink } from './../../node_modules/react-icons/fa/index.esm';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, github, live_version } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div className={styles.details}>
            <h1>{title}</h1>
            <h3>{stack}</h3>
            <div className={styles.featured}>
            <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
            <div className={styles.row}>
            <Link class={styles.link} to={github}>Github <FaLink/></Link>
            <Link class={styles.link} to={live_version}>Live Demo <FaLink/></Link>
            </div>
            </div>
            <div>
            <div className={styles.html}dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
          }
        }
      github
      live_version
      }
    }
  }
`