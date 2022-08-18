import React, { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}


});

function FavoriteContextProvider( {children}) {
   const [favMealsIds, setfavMealsIds ] = useState([]);

   const addFavorite = (id) => {setfavMealsIds((currentIdState) => { return  ([...currentIdState, id]) })}
   const removeFavorite = (id) => {setfavMealsIds((currentIdState) => { return currentIdState.filter(mealId => mealId !== id)})}


    const value= {
        ids: favMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite

        
    }

    return <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoriteContextProvider;