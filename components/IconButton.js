import React from "react";
import { Pressable, StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';

function IconButton({ name, color, onPress, size, type }) {
    return(
        <Pressable onPress={onPress} style={({pressed}) =>  pressed && styles.pressed } >
            
           <Icon
           
        type={type}
        name={name}
        color={color}
        size={size} />
       
    </Pressable>
   
    );
}

export default IconButton;

const styles = StyleSheet.create({
   
    pressed: {
        opacity: 0.7
    }

});
