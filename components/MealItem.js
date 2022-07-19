import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native'
import  { useNavigation } from '@react-navigation/native'
import MealDetailsCom
 from './MealDetailsCom';
function MealItem({ id, title, imageUrl, duration, complexity, affordability  }) {
    const navigation = useNavigation();
    function pressHandler() {
        navigation.navigate('MealDetails', { mealId: id });
    }
    return (
        <View style={styles.card}>
            <Pressable android_ripple={{ color: '#ccc'}}  style={({pressed}) => [pressed ? styles.ButtonPressed : null  ]}
             onPress={pressHandler}>
                <View style={styles.innerContainer}>
                <View>
                <Image source={{ 'uri': imageUrl }} style={styles.image} />
                <Text style={styles.title}> {title}  </Text>
                </View>
                  <MealDetailsCom duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
            
        </View>


    );
}

export default MealItem;

const styles = StyleSheet.create({
    card: {
        padding: 8,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#F5F5F5',
        shadowColor: 'grey',
       shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        marginVertical: 15


    },
    image: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        

    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        marginTop: 10,
        color: 'black'
    },
    ButtonPressed: {
        opacity: 0.25 
    },
  
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    }
})