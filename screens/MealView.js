import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/categories-data'
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';
function MealView({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeal = MEALS.filter((mealItem) => { return mealItem.categoryIds.indexOf(catId) >= 0 } );
     
    useLayoutEffect ( 
        () => {    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

                    navigation.setOptions(
                        {
                            title: categoryTitle
                        }
                    );
        } , [catId, navigation]
    )
    function renderMealHandler(itemData) {
        const item = itemData.item;
        const MealProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return (
            <MealItem {...MealProps} />    
        );


    }
    return(
        <View style={styles.mealView}>
            <FlatList 
             data={displayedMeal}
             keyExtractor={(item) => item.id }
             renderItem={renderMealHandler}

             />
        </View>
    )
}

export default MealView;

const styles = StyleSheet.create({
    mealView : {
        flex: 1,
        padding: 15,
       
    }
})