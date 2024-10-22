import { RootReduceType } from '../../app/rootReduce'
import { add } from '../../features/cart/cart-slice'
import { addOrRemove } from '../../features/favorite/favorite-slice'
import { useDispatch, useSelector } from 'react-redux'
import ProductType from '../../types/productTypes'
import * as S from './styles'

type Props = {
  product: ProductType
}

const ProductComponent = ({ product }: Props) => {
  const favoriteState = useSelector((state: RootReduceType) => state.favorite)
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(product))
  }

  const toggleFavorite = () => {
    dispatch(addOrRemove(product))
  }

  const convert = (value: number): string =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)

    const isFavorite = () : boolean => {
      return favoriteState.favorite?.some((item) => item.id === product.id);
     }

  return (
    <S.Product>
      <S.Layer>
        <img src={product.imagem} alt={product.nome} />
      </S.Layer>
      <S.Title>{product.nome}</S.Title>
      <S.Prices>
        <strong>{convert(product.preco)}</strong>
      </S.Prices>
      <S.BtnBuy onClick={toggleFavorite}>
        {isFavorite() ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnBuy>
      <S.BtnBuy onClick={addCart} type="button">
        Adicionar ao carrinho
      </S.BtnBuy>
    </S.Product>
  )
}

export default ProductComponent
