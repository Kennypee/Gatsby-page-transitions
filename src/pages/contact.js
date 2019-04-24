import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import PageTransition from 'gatsby-plugin-page-transitions'
const ContactPage = () => (
 <PageTransition transitionTime={1000}>
   <Header siteTitle="Contact page" />
    <h2>Hi you've reached my contact page</h2>
    <p>Send me a mail @me.xyz</p>
    <Link to="/"> Go to the homepage</Link>
  </PageTransition>
)

export default ContactPage
