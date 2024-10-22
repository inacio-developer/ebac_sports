import Product from '../components/Product';
import { useGetProductsQuery } from '../services/api';
import * as S from './styles'

const ProductsComponent = () => {
  const { data: products } = useGetProductsQuery()

  return (
    <>
      <S.Products>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </S.Products>
    </>
  )
}

export default ProductsComponent
