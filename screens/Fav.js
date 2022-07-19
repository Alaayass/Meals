import React from "react";

import { View, Text, StyleSheet } from 'react-native';

function Fav() {
    return(
        <View style={styles.viewContainer}>
            <Text>My favourite meals are: </Text>
        </View>
    );
}

export default Fav;

const styles= StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
               

});