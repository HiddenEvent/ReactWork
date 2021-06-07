import axios from 'axios';
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

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [isLoding, setIsLoding] = useState(true);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
      setIsLoding(false);
    });
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <>
      {isLoding ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading..
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )}
    </>
  );
};

export default Post;
