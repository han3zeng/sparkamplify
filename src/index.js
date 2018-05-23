import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'
import store from './store/store'
import { Provider } from 'react-redux'



const App = () => {
  return <div className={styles.green}>Hello React testqwef!</div>;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
