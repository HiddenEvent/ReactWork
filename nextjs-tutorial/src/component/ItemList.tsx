import { Grid, Image } from 'semantic-ui-react';

const ItemList = ({ list }) => {
  console.log(list);
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column>
              <Image src={item.image_link} alt={item.name} />
              <strong>{item.name}</strong>
              <span>
                {item.category} {item.product_type}
              </span>
              <strong>$ {item.price}</strong>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
