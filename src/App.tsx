import React from 'react';
import Hello from 'components/Hello';
import logo from 'assets/logo.png';
import styles from './App.less';

// const title = {
//   lTitle: {
//     content: 'App.js and save to reload.',
//   },
// };

const App = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <Hello />
      {/* <p>{title?.lTitle?.content}</p> */}
      <a
        className={styles.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
