import { createSlice } from "@reduxjs/toolkit";



const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFav: (state, action) => {state.ids.push(action.payload.id)},
        removeFav: (state, action) => {state.ids.splice(state.ids.indexOf(action.payload.id) ,1)}

    }

});


export const addFav = favoriteSlice.actions.addFav;
export const removeFav = favoriteSlice.actions.removeFav;
export default favoriteSlice.reducer;