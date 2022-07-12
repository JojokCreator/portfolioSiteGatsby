import React from "react"
import Navbar from "./Navbar"
import * as styles from "../../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import { ParallaxProvider } from "react-scroll-parallax"

export default function Layout({ children }) {
  return (
    <ParallaxProvider>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <footer>
        <p>Copyright J.Klakus 2022</p>
      </footer>
    </ParallaxProvider>
  )
}
