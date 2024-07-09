import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";

export const ProductSlice= createSlice({
 name: "product",
 initialState:{
   loading: false,
    products: [],
    productData: {},
    errorMessage: '',
 },
 reducers:{
   //  addProducts: (state, action) => {
   //      state.products = action.payload
   //  }
 },
 extraReducers: (builder) => {
   builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
   });
   builder.addCase(fetchProducts.fulfilled, (state,action) => {
      state.loading =false;
      state.products = action.payload
   });
   builder.addCase(fetchProducts.rejected, (state,action) => {
      state.loading =false;
      state.errorMessage = action.payload
   });
   builder.addCase(fetchProductsById.pending, (state) => {
      state.loading = true;
   });
   builder.addCase(fetchProductsById.fulfilled, (state,action) => {
      state.loading =false;
      state.productData = action.payload
   });
 }
})

export const fetchProducts = createAsyncThunk(
   'products/fetching',
   async (_, { rejectWithValue }) => {
      try{
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data.products;
      }catch(error){
         console.log(error);
         return rejectWithValue("operation Fail!!! Try Again!!!");
      }
   }
);
export const fetchProductsById = createAsyncThunk(
   'products/fetchingById',
   async (productId) => {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      return await response.json();
      
   }
)

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;