// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { getProducts, getProductsCategories } from './operations';

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     categories: [],
//     bad: [],
//     isLoading: false,
//     error: '',
//   },

//   extraReducers: builder => {
//     builder.addCase(
//       (getProducts.pending, getProductsCategories.pending),
//       state => {
//         state.isLoading = 'true';
//       }
//     );
//     builder.addCase(getProducts.fulfilled, (state, action) => {
//       state.calories = action.payload.kCal;
//       state.bad = action.payload.products;
//     });
//     builder.addCase(getProductsCategories.fulfilled, (state, action) => {
//       state.categories = action.payload.titles;
//     });
//     builder.addMatcher(
//       handleRejected(getProducts, getProductsCategories),
//       (state, action) => {
//         state.error = action.error;
//       }
//     );
//     builder.addMatcher(
//       isAnyOf(
//         action => action.type.endsWith('/rejected'),
//         action => action.type.endsWith('/fulfilled')
//       ),
//       state => {
//         state.loading = false;
//       }
//     );
//   },
// });

// export const productReducer = productsSlice.reducer;
