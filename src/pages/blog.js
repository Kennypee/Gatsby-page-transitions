import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../components/header"

const BlogPage = () => (
  
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
     <h2>Hi you've reached my blog page</h2>
     <p>I write about Front-end technologies </p> 
     <p>Stay tuned and subscribe for awesome contents</p>

    <Link to="/">Homepage</Link>
  </PageTransition>
)
export default BlogPage


// import React from "react"
// import { Link } from "gatsby"
// import PageTransition from 'gatsby-plugin-page-transitions';
// import Header from "../components/header"

// const BlogPage = () => (
//   <PageTransition>
//     <Header siteTitle="Gatsby blog"/>
//     <h2>Hi you've reached my blog page</h2>
//     <p>I write about Front-end technologies </p> 
//     <p>Stay tuned and subscribe for awesome contents</p>
//     <Link to="/"> Go to the homepage</Link>
//   </PageTransition>
// )

// export default BlogPage
