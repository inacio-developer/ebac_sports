import { combineReducers } from '@reduxjs/toolkit'
import cart from '../features/cart/cart-slice'
import favorite from '../features/favorite/favorite-slice'
import productApiSlice from '../services/api'

const rootReduce = combineReducers({
  cart,
  favorite,
  [productApiSlice.reducerPath]: productApiSlice.reducer
})

export type RootReduceType = ReturnType<typeof rootReduce>
export default rootReduce
