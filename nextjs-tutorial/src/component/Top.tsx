import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';
const Top = () => {
  return (
    <div>
      <img src="/images/twitter_header_photo_2.png" alt="logo" />
      <Header>RichardKim</Header>
      <Gnb />
    </div>
  );
};

export default Top;
