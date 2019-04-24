import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../components/header"
const AboutPage = () => (
  
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
    <Header siteTitle="Gatsby Default Starter"/>
    <h1>Hi from the About page</h1>
    <p>Welcome to my about page</p>
    <p>This is where you learn all there is to know about me</p>
    <Link to="/">Homepage</Link>
  </PageTransition>
)
export default AboutPage
