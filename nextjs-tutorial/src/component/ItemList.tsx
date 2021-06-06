import { Grid, Image } from 'semantic-ui-react';
import styles from './ItemList.module.css';

const ItemList = ({ list }) => {
  console.log(list);
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column>
              <div className={styles.wrap}>
                <Image
                  src={item.image_link}
                  alt={item.name}
                  className={styles.img_item}
                />
                <strong className={styles.tit_item}>{item.name}</strong>
                <span className={styles.txt_info}>
                  {item.category} {item.product_type}
                </span>
                <strong className={styles.num_price}>$ {item.price}</strong>
              </div>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;