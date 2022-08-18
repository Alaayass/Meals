import React from 'react';
import { CATEGORIES, MEALS } from '../data/categories-data'
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList';

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

      return <MealList  items={displayedMeal}  />  

   
}

export default MealView;

