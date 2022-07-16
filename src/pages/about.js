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
            <p className={styles.text}>After spending the majority of my life in hospitality and resort management. I am looking to change my career path towards using my passion and knowledge in website design and coding.
            I have just completed the School of Code where I learnt how to work in a high performance tech team using agile working methods and user-driven design to create UI/UX. I have built  a number of REST API’s linked to databases and front-ends in React which fetched data from those services. We focused on testing and modern software engineering practices using jest, cypress and react-testing. We used git for version control. 
            </p>
            <StaticImage className={styles.me} src="../images/me.jpg" alt="me"/> 
        </div>
        <Link to="https://www.schoolofcode.co.uk/"></Link>
        <ul>
            <h3>Skills</h3>
            <li>I have been learning programming logic and the ability to apply it to any programming language although we have been mainly based on JavaScript.</li>
            <li>A mindset of efficiency and creativity.</li>
            <li>Strong Communication skills, from previous work and life experience.</li>
        </ul>
    </div>
    </Layout>
  )
}


