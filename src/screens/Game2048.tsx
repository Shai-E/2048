import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Lottie from 'lottie-react-native';

// Style
import ScreenContainer from '../components/reusable/ScreenContainer.tsx';
import ButtonElement from '@src/components/reusable/ButtonElement.tsx';
import TextElement from '@src/components/reusable/TextElement.tsx';
import {wp} from '@src/services/dimensions/dimensions.ts';

const Game2048 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isUndoAvailable, setIsUndoAvailable] = useState(false);
  const [isRedoAvailable, setIsRedoAvailable] = useState(false);
  const webViewRef = useRef<WebView>(null); // Correctly typing the ref

  useEffect(()=>{
    if (webViewRef?.current?.injectJavaScript) {
      const containerWidth = wp('100%'); // assuming wp is a function calculating width in percentage
      const originalWidth = 280; // original width of the game container
      webViewRef.current?.injectJavaScript(`
        (function() {
          var gameContainer = document.querySelector('.game-container');
          if (gameContainer) {
            gameContainer.style.zoom = '${containerWidth/originalWidth}';
          }
          return true;
        })();
      `);
    }
  },[webViewRef.current])
  const handleUndoPress = () => {
    if (webViewRef.current) {
      // Inject JavaScript to trigger the click event on the undo button
      webViewRef.current.injectJavaScript(`
        document.querySelector('.undo-button').click();
      `);
    }
  };
  const handleRedoPress = () => {
    if (webViewRef.current) {
      // Inject JavaScript to trigger the click event on the undo button
      webViewRef.current.injectJavaScript(`
        document.querySelector('.redo-button').click();
      `);
    }
  };
  const handleRestartPress = () => {
    if (webViewRef.current) {
      // Inject JavaScript to trigger the click event on the undo button
      webViewRef.current.injectJavaScript(`
        document.querySelector('.restart-button').click();
      `);
    }
  };
  return (
    <ScreenContainer>
      <View style={{flex: 1}}>
        <View style={{margin: 20}}>
          <TextElement fontSize="xl">{`SCORE: ${score?.toString()}`}</TextElement>
          <TextElement fontSize="lg">{`BEST: ${bestScore?.toString()}`}</TextElement>
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 40,
            width: wp('100%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <ButtonElement
            buttonSize="auto"
            backgroundColor={isUndoAvailable ? '#8f7a66' : '#d0c9c0'}
            borderColor="#8f7a66"
            titleColor="#f9f6f2"
            style={{paddingStart: 10, paddingEnd: 10}}
            fontSize="m"
            label="Undo"
            onPress={handleUndoPress}
          />
          <ButtonElement
            buttonSize="auto"
            backgroundColor="#8f7a66"
            borderColor="#8f7a66"
            titleColor="#f9f6f2"
            style={{paddingStart: 10, paddingEnd: 10}}
            fontSize="m"
            label="Restart"
            onPress={handleRestartPress}
          />
          <ButtonElement
            buttonSize="auto"
            backgroundColor={isRedoAvailable ? '#8f7a66' : '#d0c9c0'}
            borderColor="#8f7a66"
            titleColor="#f9f6f2"
            style={{paddingStart: 10, paddingEnd: 10}}
            fontSize="m"
            label="Redo"
            onPress={handleRedoPress}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            width: wp('100%'),
            alignItems: 'center',
          }}>
          <View style={{height: wp('100%')}}>
            <WebView
              ref={webViewRef}
              androidLayerType="software"
              containerStyle={{width: wp('100%')}}
              source={{
                uri: 'https://shai-e.github.io/Game2048JS/',
                // uri: 'http://127.0.0.1:5500/index.html',
              }}
              onLoadEnd={() => setIsLoading(false)}
              javaScriptEnabled={true}
              onMessage={event => {
                const data = JSON.parse(event.nativeEvent.data);
                if (data.event === 'actuate') {
                  setScore(data.payload.score);
                  setBestScore(data.payload.bestScore);
                  setIsUndoAvailable(data.payload.isUndoAvailable);
                  setIsRedoAvailable(data.payload.isRedoAvailable);
                }
              }}
            />
          </View>
        </View>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <Lottie
              source={require('../../src/assets/animations/loader-3dots.json')}
              style={{width: Dimensions.get('window').width * 0.5}}
              autoPlay={true}
              loop
            />
          </View>
        )}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loadingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Game2048;
