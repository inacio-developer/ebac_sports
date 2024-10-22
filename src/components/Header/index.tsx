import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { RootReduceType } from '../../app/rootReduce'
import { useSelector, useDispatch } from 'react-redux'
import { total } from '../../features/cart/cart-slice'
import { useEffect } from 'react'

const Header = () => {
  const cartState = useSelector((state: RootReduceType) => state.cart)
  const favoriteState = useSelector((state: RootReduceType) => state.favorite)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(total())
  }, [cartState.amount])

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoriteState.amount} favoritos</span>
        <img src={cesta} />
        <span>
          {cartState.amount} itens, valor total: {cartState.total}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
