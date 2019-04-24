import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      transition: 'left 1000ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={1000}
  >
    <Header siteTitle="Gatsby transitions demo" />
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
 
    <Link to="/blog/">Go to my blog</Link> <br /><br></br>
    <Link to="/about/">Go to my about page</Link> <br /><br></br>
    <Link to="/contact/">Go to my contact page</Link> <br />

  </PageTransition>
)

export default IndexPage
