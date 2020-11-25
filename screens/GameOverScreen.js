import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameScreen from './GameScreen';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Game Over</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;