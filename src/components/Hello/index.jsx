import React from 'react';
import styles from './index.less';

const Hello = () => {
  return (
    <div>
      <span className={styles.hello}>Hello</span>
      <span className={styles.first}>TypeScript</span>
    </div>
  );
};
export default Hello;
