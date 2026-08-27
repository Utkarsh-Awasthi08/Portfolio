import React from 'react'

const Loader = () => {
  return (
    <div className="loader-wrapper" id="site-loader">
        <div className="loader">
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-text">U.A.</div>
        </div>
        <p className="loader-tagline">Loading Portfolio</p>
    </div>
  )
}

export default Loader