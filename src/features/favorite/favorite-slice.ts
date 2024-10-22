import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Produto from '../../types/productTypes'

type ProductState = {
  favorite: Produto[]
  amount: number
}

const initialState : ProductState = {
  favorite: [],
  amount: 0,
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addOrRemove: (state: ProductState, action: PayloadAction<Produto>) => {
      const newProduct: Produto = action.payload
      const newArray: Produto[] = state.favorite.filter(
        (fav) => fav.id != newProduct.id
      )

      if (newArray.length === state.favorite.length) {
        state.favorite.push(newProduct)
        state.amount++
      } else {
        state.favorite = newArray
        state.amount--
      }
    },
  }
})

export const { addOrRemove } = favoriteSlice.actions
export default favoriteSlice.reducer
