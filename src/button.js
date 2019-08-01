import React, { Component } from 'react';
import {Alert, AppRegisrty, Button, StyleSheet, View} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton(){
    Alert.alert('You tapped the button!')
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title= ":::"
            color= "#FFFFFF"
          />
        </View>
      </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#292929',
    position: 'absolute',
    bottom: 200,
    left: 50
  },
  buttonContainer: {
    width: 20,
    height:50,
    margin: 20
  },

})
