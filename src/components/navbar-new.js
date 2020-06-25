import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState, useEffect } from "react"
import "./navbar-new.scss"
import { stack as Menu } from "react-burger-menu"
import Navbar from "./navbar"
import NavbarSmall from "./navbar-small"
import NavbarMedium from "./navbar-medium"
import sizeMe from "react-sizeme"

const NavbarNew = props => {
  const [path, setPath] = useState(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getCurrentPath = () => {
        const url = typeof window !== "undefined" ? window.location.href : ""
        const parts = url.split("/")
        const finalSegment = parts.pop() || parts.pop()
        const pathArr = ["projects", "about", "avi", "articles", "contact"]
        let urlPath
        pathArr.forEach(pathElement => {
          if (finalSegment.indexOf(pathElement) >= 0) {
            urlPath = pathElement
          }
        })
        if (urlPath === "#" || !pathArr.includes(urlPath)) {
          setPath("item-home")
        } else {
          setPath(`item-${urlPath}`)
        }
      }
      getCurrentPath()
    }
  })
  const { width } = props.size

  let ToRenderChildNavbar
  if (width > 1100) {
    ToRenderChildNavbar = Navbar
  } else if (1100 > width && width > 420) {
    ToRenderChildNavbar = NavbarMedium
  } else {
    ToRenderChildNavbar = NavbarSmall
  }

  const addMenuHighlight = item => {
    if (path === item) {
      setTimeout(() => {
        return "current-path"
      }, 1500)
    } else {
      return null
    }
  }

  const showSettings = event => {
    event.preventDefault()
  }
  return (
    <div id="outer-container">
      <ToRenderChildNavbar />
      <Menu
        right
        disableAutoFocus
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <AniLink
          cover
          direction="right"
          bg="#808080"
          to="/"
          className={"item-home" === path ? "current-path" : null}
        >
          בית
        </AniLink>
        <AniLink
          cover
          direction="right"
          bg="#808080"
          to="/projects/"
          className={"item-projects" === path ? "current-path" : null}
        >
          פרויקטים
        </AniLink>
        <AniLink
          cover
          direction="right"
          bg="#808080"
          to="/about/"
          className={"item-about" === path ? "current-path" : null}
        >
          עלינו
        </AniLink>
        <AniLink
          cover
          direction="right"
          bg="#808080"
          to="/avi/"
          className={"item-avi" === path ? "current-path" : null}
        >
          אבי זיתוני
        </AniLink>
        <AniLink
          cover
          direction="right"
          bg="#808080"
          to="/articles/"
          className={"item-articles" === path ? "current-path" : null}
        >
          מהתקשורת
        </AniLink>
        <AniLink
          cover
          direction="right"
          bg="#808080"
          to="/contact/"
          className={"item-contact" === path ? "current-path" : null}
        >
          צרו קשר
        </AniLink>
        <a onClick={showSettings} className="menu-item--small" href=""></a>
      </Menu>
      <main id="page-wrap"></main>
    </div>
  )
}

export default sizeMe({ monitorWidth: true })(NavbarNew)
