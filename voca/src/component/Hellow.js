import React, { useState } from 'react';
import styles from './Hellow.module.css';

const Hellow = () => {
  let [name, setName] = useState('Mike');

  return (
    <div>
      <h1>자 컴포넌트 간다</h1>
      <p className={styles.box}>css 테스트</p>

      <h2>{name}</h2>
      <button
        onClick={() => {
          setName(name === 'Mike' ? 'Jane' : 'Mike');
        }}
      >
        change
      </button>
    </div>
  );
};

export default Hellow;
