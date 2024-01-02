 

// export const selectBadProducts = state => state.products.bad;
// export const selectCalories = state => state.products.calories;
// export const selectLoadStatus = state => state.products.loading;
// export const selectLoadError = state => state.products.error;

// export const getAllGroupDiaryProduct = state => {
//   const products = state.diary.notes.reduce((total, note) => {
//     const index = total.findIndex(product => product._id === note.product._id);
//     if (-1 === index) {
//       total.push({
//         _id: note.product._id,
//         weight: note.weight,
//         product: {
//           title: note.product.title,
//           calories: note.product.calories,
//           weight: note.product.weight,
//         },
//       });
//     } else {
//       total[index].weight += note.weight;
//       total[index].calories += Math.round(
//         (note.product.calories / 100) * note.weight
//       );
//     }
//     return total;
//   }, []);
//   return products;
// };
// export const getAllDiaryProduct = state => state.diary.notes;
// export const getProductTitle = state => state.diary.selectTitle;
// export const getIsLoading = state => state.diary.IsLoading;
// export const getDiaryDay = state => state.diary.day;

// export const selectBadCategories = state => state.products.categories;