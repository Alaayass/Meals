import React from "react";
import { Text, View, StyleSheet } from 'react-native'

function MealDetailsCom({duration, complexity, affordability, style}) {
    return(
        <View style={styles.details}>
        <Text style={[styles.detailedText, style]}>{duration}</Text>
        <Text style={[styles.detailedText, style]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailedText, style]}>{affordability.toUpperCase()}</Text>
    </View>

    );
}

export default MealDetailsCom;

const styles = StyleSheet.create({

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailedText: {
        margin: 10,
        fontSize: 12
    },
});