import React from 'react'
import Layout from "./components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function NotFound() {
  return (
    <Layout>
    <div>
        <h2>404</h2>
        <p>Sorry, doesn't exist</p>
    </div>
    </Layout>
  )
}
