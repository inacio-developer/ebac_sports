import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Produto from '../types/productTypes'

const productApiSlice = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  tagTypes: ['PRODUCT'],
  endpoints: (build) => ({
    getProducts: build.query<Produto[], void>({
      query: () => 'ebac_sports',
      providesTags: ['PRODUCT']
    })
  })
})

export const { useGetProductsQuery } = productApiSlice
export default productApiSlice
