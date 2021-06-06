import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState<string[]>([]);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>HOME | 리차드킴</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  );
}
