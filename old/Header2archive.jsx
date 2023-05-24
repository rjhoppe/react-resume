import React from "react";
import './header2.css'

const Header = () => {
  return (
    <body>
      <div className="header">
          <div className="header__content flex">
            <h1>Hello, my name is Rick Hoppe</h1>
          </div>
          <div className="header__animation__container">
              <svg class="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                  <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/></defs>
                  <g class="parallax">
                      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(44, 21, 71, 0.7)"/>
                      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 21, 71, 0.5)"/>
                      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 21, 34, 0.3)"/>
                      <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0, 21, 71, 0.5)"/>
                      {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)"/>
                      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/> */}
                  </g>
              </svg>
            </div>
        </div>
    </body>
  )
}

export default Header