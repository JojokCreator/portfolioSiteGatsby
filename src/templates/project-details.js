import React from 'react'
import Layout from '../pages/components/Layout'
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div className={styles.details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={styles.featured}>
            <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />

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
      }
    }
  }
`