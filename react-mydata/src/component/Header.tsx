import React, { FC, ReactElement } from 'react';

// define interface to represent component props
interface IProps {
  title: String;
}

const Header: FC<IProps> = ({ title }): ReactElement => {
  return <div>{`title`}</div>;
};

export default Header;
