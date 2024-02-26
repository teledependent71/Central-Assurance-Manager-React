import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Assurance Manager</title>
        <meta property="og:title" content="Central Assurance Manager" />
      </Helmet>
    </div>
  )
}

export default Home
