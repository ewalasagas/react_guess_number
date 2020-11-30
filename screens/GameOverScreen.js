import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                fadeDuration={1000}
                    // source={require('../assets/success.png')}
                    source={{uri: 'https://image.shutterstock.com/image-photo/evening-view-ama-dablam-on-260nw-258841592.jpg'}}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <BodyText>
                Your phone needed 
                 <Text> {props.roundsNumber} </Text>
                 rounds to guess the number 
                 <Text> {props.userNumber} </Text>
                 </BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    },
    image: {
        width: '110%',
        height: '110%',
    }
});

export default GameOverScreen;