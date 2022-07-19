import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'


function CategoryGridView ({title, color, onPress}) {
    return <View style={[styles.outerView, {backgroundColor: color}]}>
        <Pressable android_ripple={{color: '#ccc'}}  style={({pressed}) => [styles.catButton,  pressed ? styles.catButtonPressed : null  ]} 
            onPress={onPress}>
            <View style={styles.innerView}>
                <Text style={styles.catTitle}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridView;

const styles= StyleSheet.create({
   outerView : {
       flex: 1,
       margin: 15,
       height: 100,
       borderRadius: 12,
       elevation: 4,
       backgroundColor: 'white',
       shadowColor: 'grey',
       shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

   },

   innerView: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   catButton: {
       flex: 1
   },
   catButtonPressed : {
       opacity: 0.25
   },

   catTitle: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'black'
   }

})
