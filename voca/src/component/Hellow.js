import React, { useState } from 'react';
import styles from './Hellow.module.css';
import UserNmae from './UserName';

const Hellow = (props) => {
  console.log(props);
  const [name, setName] = useState('Mike');

  return (
    <div>
      <h1>자 컴포넌트 간다</h1>
      <p className={styles.box}>css 테스트</p>

      <h2>
        {name}({props.age})
      </h2>

      <UserNmae name={name} />
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
