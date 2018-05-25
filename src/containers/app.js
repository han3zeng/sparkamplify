import React from 'react'
import ReactDOM from 'react-dom'
import styles from './home.css'
import { Link } from 'react-router'
import 'normalize.css'

const Home = (props) => {
  return (
    <div>
      <div className={styles.navWrapper}>
        <ul role="nav">
          <li><Link to="/">home</Link></li>
          <li><Link to="/search">search</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </div>
      {props.children}
    </div>
  )
};

export default Home
