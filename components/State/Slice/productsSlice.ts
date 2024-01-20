import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
