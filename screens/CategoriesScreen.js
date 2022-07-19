import React from 'react';
import { CATEGORIES } from '../data/categories-data';
import { FlatList } from 'react-native';
import  CategoryGridView  from '../components/CategoryGridView'



function CategoriesScreen ({navigation}) {
    function pressHandler(itemData) {
        navigation.navigate('MealOverView', { categoryId: itemData.item.id})
    }
    function RenderItemFunc (itemData) {
        return <CategoryGridView title={itemData.item.title} color={itemData.item.color}
         onPress={pressHandler.bind(this, itemData)} />
    }
    return <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {item.id}}
      renderItem={RenderItemFunc} 
      numColumns={2} />


}

export default CategoriesScreen;