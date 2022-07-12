import React from "react"
import Layout from "./components/Layout.js"
import * as styles from '../styles/about.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function about() {
  return (
    <Layout>
        <div>
        <h2>About Me</h2>
        <div className={styles.container}>
            <p className={styles.text}>After spending the majority of my life in hospitality and resort management. I am looking to change my career path towards using my passion and knowledge in website design and coding.
                I am currently enrolled in a 16-week remote intensive web development course learning the fundamentals of programming, how to work in a high-performance tech team, and you will be specialising in full-stack JavaScript development via https://www.schoolofcode.co.uk/.
            </p>
            <StaticImage className={styles.me} src='..\images\me.jpg' alt="me"/> 
        </div>
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


