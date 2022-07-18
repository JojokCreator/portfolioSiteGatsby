import React from "react"
import Layout from "./components/Layout.js"
import * as styles from '../styles/about.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function about() {
  return (
    <Layout>
        <div>
        <h2>About Me</h2>
        <div className={styles.container}>
            <p className={styles.text}> I am used to work in a high performance tech team using agile working methods and user-driven design to create UI/UX, but am also comfortable working alone.
            I have built a number of REST API’s linked to databases and front-ends in React which fetched data from those services. I focus on testing and modern software engineering practices using jest, cypress and react-testing. For version control I use git to track different versions of my code and collaborate with other developers
            </p>
            <StaticImage className={styles.me} src="../images/me.jpg" alt="me"/> 
        </div>
        <Link to="https://www.schoolofcode.co.uk/"></Link>
        <ul>
            <h3>Skills</h3>
            <li>I have learnt programming logic and the ability to apply it to any programming language although I have been mainly using JavaScript and TypeScript.</li>
            <li>A mindset of efficiency and creativity.</li>
            <li>Strong Communication skills, from previous work and life experience where I worked with colleague from a variety of backgrounds</li>
        </ul>
    </div>
    </Layout>
  )
}


