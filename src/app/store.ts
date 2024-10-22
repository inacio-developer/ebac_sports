import { configureStore } from '@reduxjs/toolkit'
import rootReduce from './rootReduce'
import productApiSlice from '../services/api'

const store = configureStore({
  reducer: rootReduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApiSlice.middleware)
})

export { store }
