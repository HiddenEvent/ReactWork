import React from 'react';
import styles from './Hellow.module.css';

const Hellow = () => {
  return (
    <div>
      <h1>자 컴포넌트 간다</h1>
      <p className={styles.box}>css 테스트</p>
    </div>
  );
};

export default Hellow;
