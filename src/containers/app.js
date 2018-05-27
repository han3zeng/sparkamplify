import React from 'react'
import ReactDOM from 'react-dom'
import styles from './app.css'
import { Link } from 'react-router'
import 'normalize.css'

const Home = (props) => {
  return (
    <div>
      <ul role="nav">
        <li><Link to="/">home</Link></li>
        <li><Link to="/search">search</Link></li>
      </ul>
      {props.children}
    </div>
  )
};

export default Home
