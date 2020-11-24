import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        // the epsilons allow for overriding (the props.style is what we use)
        <View style={{...styles.card, ...props.style}}>
            {/* content you pass between opening/closing */}
            {props.children}    
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,    //only works on iOS
        elevation: 8, //only works on Android
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    }
});

export default Card;