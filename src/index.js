import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'

const Index = () => {
  return <div className={styles.green}>Hello React testqwef!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));
