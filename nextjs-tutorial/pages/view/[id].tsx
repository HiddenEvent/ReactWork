import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from './../../src/component/Item';

// interface IProps {
//   product: IProduct;
// }

// export interface IProduct {
//   name: string;
//   image_link: string;
//   price: number;
//   description: string;
//   updated_at: string;
//   category: string;
//   product_type: string;
//   product_link: string;
// }

const Post = ({ item }) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  console.log(res.data);

  return {
    props: {
      item: data,
    },
  };
}
