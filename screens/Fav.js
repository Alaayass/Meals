import React, { useContext } from "react";

import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { MEALS } from "../data/categories-data";
import { FavoriteContext } from "../store/context/favouriate-context";

function Fav() {
    //const favCtx = useContext(FavoriteContext);
    const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);
    const favMeals = MEALS.filter(meal => {return favoriteMeals.includes(meal.id)})

    if(favMeals.length === 0){
        return <View style={styles.viewContainer}>
            <Text style={styles.title}>Add some favoriates! </Text>
        </View>
    }
    return(
        <MealList items={favMeals} />
            
        
    );
}

export default Fav;

const styles= StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'black'
    }
               

});