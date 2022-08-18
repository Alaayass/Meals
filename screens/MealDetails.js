import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/categories-data';
import MealDetailsCom from '../components/MealDetailsCom';
import IconButton from '../components/IconButton';
import { FavoriteContext } from '../store/context/favouriate-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../store/redux/favorites'
function MealDetails({ route, navigation }) {
   //const favMealsCtx = useContext(FavoriteContext);
     const favMeals = useSelector((state) => state.favoriteMeals.ids);
     const dispatch = useDispatch();
    const mealid = route.params.mealId;
    const mealISFav = favMeals.includes(mealid);

    const selectedMeal = MEALS.find((meal) =>meal.id === mealid  );
    function buttonPressHandler() {
      if(mealISFav) {
        dispatch(removeFav({id: mealid}))
      }
      else{
         dispatch(addFav({id: mealid}))
      }
     
    }
    useLayoutEffect(()=>{navigation.setOptions({
      headerRight: () => {
         return <IconButton name={mealISFav ? 'heart' : 'heart-outline'} type='ionicon' size={20} color='red' onPress={buttonPressHandler}/>
      }
    })}, [navigation, buttonPressHandler] )
  
  
    return(
           <ScrollView style={styles.screen}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title} </Text>
            <MealDetailsCom duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}
                 style={styles.TextStyle}   />
            <View>
                <View style={styles.ingredientTitleContainer}>
                <Text style={styles.ingredientTitle}>Ingredients</Text>
                </View>
                <View style={styles.list}>
                    {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
                </View>
            </View>
            <View>
                <View style={styles.ingredientTitleContainer}>
                <Text style={styles.ingredientTitle}>Steps</Text>
                </View>
                <View style={styles.list}>
                    {selectedMeal.steps.map((step) => <Text key={step} style={styles.listText}>{step}</Text>)}
                </View>
            </View>
           </ScrollView>
    );
}
export default MealDetails;

const styles = StyleSheet.create({
     image: {
        width: '100%',
        height: 350
     },
    
     screen: {
        padding: 25,
        margin: 5
     },
     title: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
     },
     ingredientTitle: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
        

     },
     ingredientTitleContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginHorizontal: 20
     },
     list: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        marginBottom: 10
     },
     listText: {
        color: 'grey'
     },
     TextStyle: {
        color: 'grey'
     }
});