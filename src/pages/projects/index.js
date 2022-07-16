import React from "react"
import Layout from "../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link className={styles.link} to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
              <GatsbyImage className={styles.image} image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={project.frontmatter.title}/>
                <h3>{project.frontmatter.title}</h3>
                <p> {project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <br></br>
        <p>Want to collaborate? Contact me at {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
