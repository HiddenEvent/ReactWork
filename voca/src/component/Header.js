import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link href="/">토익 영단어(고급)</Link>
      </h1>
      <div className="menu">
        <Link to="/">단어 추가</Link>
        <Link to="/">Day 추가</Link>
      </div>
    </div>
  );
};

export default Header;