import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Produto from '../../types/productTypes'

export type ProductState = {
  product: Produto[]
  amount: number
  total: string
}

const initialState: ProductState = {
  product: [],
  amount: 0,
  total: ''
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state: ProductState, action: PayloadAction<Produto>) => {
      const newProduct: Produto = action.payload
      const verify: boolean = state.product.some(
        (product) => product.id === newProduct.id
      )

      if (verify) alert('Item já adicionado')
      else {
        state.product.push(newProduct)
        state.amount++
      }
    },
    total: (state: ProductState) => {
      const getValue = state.product.reduce(
        (acc, product) => (acc += product.preco),
        0
      )
      const convert = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(getValue)

      state.total = convert
    }
  }
})

export const { add, total } = cartSlice.actions
export default cartSlice.reducer
