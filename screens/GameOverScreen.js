import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    // source={require('../assets/success.png')}
                    source={{ uri: 'https://image.shutterstock.com/image-photo/evening-view-ama-dablam-on-260nw-258841592.jpg' }}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>

            <View styles={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed
                 <Text styles={styles.highlight}> {props.roundsNumber} </Text>
                    rounds to guess the number
                 <Text style={styles.highlight}> {props.userNumber} </Text>
                </BodyText>
            </View>
            <MainButton
                onPress={props.onRestart}>NEW GAME</MainButton>
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
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;