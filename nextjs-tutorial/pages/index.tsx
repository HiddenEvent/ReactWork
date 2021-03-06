import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState<string[]>([]);
  const [isLoding, setIsLoding] = useState(true);

  // 환경 변수 활용 .env.  파일에 있음
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoding(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>HOME | 리차드킴</title>
        <meta name="description" content="리차드님의 홈입니다."></meta>
      </Head>
      {isLoding && (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading..
          </Loader>
        </div>
      )}
      {!isLoding && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
