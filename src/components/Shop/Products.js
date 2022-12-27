import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[
  {
    id:'p1',price:40,title:' first Book',description:'geo'
  },
  {
    id:'p2',price:60,title:'second  Book',description:'history'
  },
  {
    id:'p3',price:30,title:'third Book',description:'polity'
  },
  {
    id:'p4',price:20,title:'fourth Book',description:'maths'
  },

]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {DUMMY_PRODUCTS.map(product=> <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
