import React from "react"
import Layout from "./components/Layout"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Parallax } from "react-scroll-parallax"
import { SiExpress, SiFigma, SiGatsby, SiJavascript, SiMiro, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from './../../node_modules/react-icons/si/index.esm';

export default function Home({}) {
  return (
    <Layout>
      <div id="section1" className="page">
        <Parallax speed={-20}>
          <h1 className={styles.welcome}>Welcome</h1>
          <div className={styles.scroll}>
            <StaticImage
              className={styles.arrow}
              src="../images/arrow.png"
              alt="arrow"
            />
            <h3>Scroll Down</h3>
          </div>
        </Parallax>
      </div>
      <div id="section2" className={styles.container}>
        <h2>Hello</h2>
        <h3 className={styles.text}>
          "I am Joe, from the UK. I build the web. From simple static
          pages to full stack sites with databases.
        </h3>
      </div>

      <div id="section3" className="page">
        <div className={styles.heading}>
          <h2>Technologies</h2>
        </div>
        <div class={styles.cardholder}>
          <div class={styles.card}>
            <h3>Front-End</h3>
            <ul>
              <li>React <SiReact /></li>
              <li>Gatsby <SiGatsby/></li>
              <li>JavaScript <SiJavascript/></li>
              <li>TypeScript <SiTypescript/></li>
            </ul>
          </div>
          <div class={styles.card}>
            <h3>Back-End</h3>
            <ul>
              <li>Node.js <SiNodedotjs/></li>
              <li>Express REST API's <SiExpress/></li>
              <li>Postgres <SiPostgresql/> </li>
              <li>Mongo DB <SiMongodb/></li>
            </ul>
          </div>
          <div class={styles.card}>
            <h3>UI/UX Design</h3>
            <ul>
              <li>Figma <SiFigma/></li>
              <li>Miro <SiMiro/></li>
              <li>Draw.io</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="section4" class="page">
        <div class={styles.heading}>
          <h2>Links</h2>
        </div>
        <div class={styles.cardholder}>
          <div class={styles.link}>
            <a href="https://github.com/JojokCreator">
              <StaticImage
                className={styles.linkImg}
                src="../images/github.png"
                alt="github"
              />
            </a>
          </div>
          <div class={styles.link}>
            <a href="https://www.linkedin.com/in/joe-klakus-40bb9820b/">
              <StaticImage
                className={styles.linkImg}
                src="../images/linked.png"
                alt="linkedin"
              />
            </a>
          </div>
          <div class={styles.link}>
            <a href="joeyk2k@gmail.com">
              <StaticImage
                className={styles.linkImg}
                src="../images/email.png"
                alt="email"
              />
            </a>
          </div>
        </div>
        <Link class={styles.portfolio} to="/projects">
          See Portfolio Projects Here
        </Link>
      </div>
    </Layout>
  )
}
