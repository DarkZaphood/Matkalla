import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export class Logo extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 640, height: 480}}
          source={require('./background.jpg')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
      </View>
    );
  }
}
