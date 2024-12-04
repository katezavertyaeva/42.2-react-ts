import { ProductListContainer } from './styles';
import { productData } from './data';
import { Product } from './types';
import ProductItem from '../ProductItem/ProductItem';

function ProductList() {
  const productList = productData.map((product: Product) => {
    return (
      <ProductItem productImg={product.img} productName={product.product} onCardClick={()=>{}}/>
    );
  });

  return <ProductListContainer>{productList}</ProductListContainer>;
}

export default ProductList;