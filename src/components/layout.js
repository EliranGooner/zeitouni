/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from './footer'
import FooterSmall from './footer-small'
import Navbar from './navbar'
import NavbarNew from "./navbar-new"
import "./layout.css"
import { SizeMe } from 'react-sizeme'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavbarNew />
        <main>{children}</main>
        <SizeMe>{({ size }) => size.width > 420 ?
          <Footer />
        :
          <FooterSmall />
      }</SizeMe>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
