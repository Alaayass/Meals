import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from './favorites'

const store = configureStore({
  reducer: {
    favoriteMeals: favoriteSlice
    
  }
});

export default store;