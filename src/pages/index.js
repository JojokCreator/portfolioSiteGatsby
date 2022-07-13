import React from "react"
import Layout from "./components/Layout"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Parallax } from 'react-scroll-parallax'

export default function Home({ data }) {

  return ( 
    <Layout>
      <div id="page1" className="page">
      <Parallax speed={-10}>
          <h1 className={styles.page1__welcome}>Welcome</h1>
          <div className={styles.page1__scroll}>
            <StaticImage className={styles.page1__arrow} src="../images/arrow.png" alt='arrow' />
            <h2>Scroll Down</h2>
          </div>
          </Parallax>
          </div>
      <div id="page2">
        <h2>Hello</h2>
        <div className={styles.page2__container}>
          <h3 className={styles.page2__text}>
            "I am Joe, from the UK. I design websites from simple static pages to full stack sites with databases.
          </h3>
        </div>
      </div> 
        
      <div id="page3" className="page">
        <div className={styles.page4__heading}>
              <h2>Technologies</h2>
            </div>
            <div class={styles.page4__cardholder}>
              <div class={styles.page3__carddark}>
                <h3>Front-End</h3>
                <ul>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div class={styles.page3__carddark}>
                <h3>Back-End</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express REST API's</li>
                  <li>Postgres & Mongo DB</li>
                </ul>
              </div>
              <div class={styles.page3__carddark}>
                <h3>UI/UX Design</h3>
                <ul>
                  <li>Figma</li>
                  <li>Miro</li>
                  <li>Draw.io</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="page4" class="page">
          <div class={styles.page4__heading}>
            <h2>Links</h2>
          </div>
          <div class={styles.page4__cardholder}>
            <div class={styles.page4__link}>
                <a href="https://github.com/JojokCreator"><StaticImage className={styles.page4__linkImg} src="../images/github.png"/></a>
            </div>
            <div class={styles.page4__link}>
                <a href="https://www.linkedin.com/in/joe-klakus-40bb9820b/"><StaticImage className={styles.page4__linkImg} src="../images/linked.png"/></a>
            </div>
            <div class={styles.page4__link}>
                <a href="joeyk2k@gmail.com"><StaticImage className={styles.page4__linkImg} src="../images/email.png" alt='laptop' /></a>    
                </div>
          </div>      
                <Link class={styles.portfolio}to="/projects">See Portfolio Projects Here</Link>
        </div>
    </Layout>
  )
}
