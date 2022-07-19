/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';

import React from 'react';
import { Button } from 'react-native'
import  CategoriesScreen  from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealView from './screens/MealView';
import { CATEGORIES } from './data/categories-data';
import MealDetails from './screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed'
import Fav from './screens/Fav';

 const Stack = createNativeStackNavigator();
 const Drawer = createDrawerNavigator();

 function DrawerNav() {
  return<Drawer.Navigator screenOptions={{
       drawerActiveTintColor: '#f5428d',
       drawerActiveBackgroundColor: 'pink',
       drawerInactiveTintColor: 'black',
       sceneContainerStyle: { backgroundColor: '#F3CFC6'},
       drawerContentStyle: { backgroundColor: '#F3CFC6' },

       headerStyle: {backgroundColor: 'pink'},
      
  }}>
     <Drawer.Screen name='AllCategories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({size, color}) => { return <Icon name='list' type='ionicon' size={size} color={color}/>}

     }} />
     <Drawer.Screen name='Fav' component={Fav} options={{
      title: 'My Favourite',
      drawerIcon: ({size, color}) => { return <Icon name='star' type='ionicon' size={size} color={color}/>}
     }}  />
  </Drawer.Navigator>
 }




function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MealsCategories' >
        <Stack.Screen  name='Drawer' component={DrawerNav} options={{headerShown: false}} />
        <Stack.Screen name='MealOverView' component={MealView}   />
        <Stack.Screen name='MealDetails' component={MealDetails} options={{title: 'Meal Details'}}   />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
};



export default App;
