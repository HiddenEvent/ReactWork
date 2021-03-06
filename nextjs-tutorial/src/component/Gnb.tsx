import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const Gnb = () => {
  const router = useRouter(); // next에서 제공해주는 router 기능

  let activeItem: string;
  if (router.pathname === '/') {
    activeItem = 'home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  }
  console.log(router);
  function goLink(e, data) {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name="ConcatUs"
        active={activeItem === 'concatus'}
        onClick={() => {
          router.push('/contact');
        }}
      />
    </Menu>
  );
};

export default Gnb;
