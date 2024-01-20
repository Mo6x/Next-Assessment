import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { setProducts } from '../Slice/productsSlice';



interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

type AsyncThunkConfig = {
  dispatch: Dispatch;
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { dispatch }: AsyncThunkConfig) => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data: Product[] = await response.json();

      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching products:', error);
      // You can dispatch an error action here if needed
    }
  }
);








