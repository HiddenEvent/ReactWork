import React from 'react';

const Bottom = () => {
  function showName() {
    console.log('이름');
  }
  function showAge(age) {
    console.log(age);
  }

  return (
    <div>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(20);
        }}
      >
        show age
      </button>
    </div>
  );
};

export default Bottom;
