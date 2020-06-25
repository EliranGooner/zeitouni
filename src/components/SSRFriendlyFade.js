import { Fade } from "react-slideshow-image"
import React from "react"

function SSRFade({ children }) {
  // this is not complete - we want to replicate html markup from https://github.com/femioladeji/react-slideshow/blob/53eacdf94277eff977cbe84aea830dc0d4588708/src/lib/components/slideshow/fade.js#L188-L227 so react hydration works correctly - this is just example showing start of creating similar html markup

  return (
    <div>
      <div className="react-slideshow-container">{children}</div>
    </div>
  )
}

// this will export `Fade` if defined and fallback to SSRFade if not
export const SSRFriendlyFade = Fade || SSRFade
