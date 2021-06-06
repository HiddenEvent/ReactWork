import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    setText('타입스크립트');
    // setText("타입스크립트")
  }, 1000);

  return (
    <div className="container">
      <Head>
        <title>HOME | 리차드킴</title>
      </Head>
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </div>
  );
}
