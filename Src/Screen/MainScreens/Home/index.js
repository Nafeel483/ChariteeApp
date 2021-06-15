import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import Styles from './Styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.moved = false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <SafeAreaView style={Styles.mainConatiner}>


        </SafeAreaView>
      </>
    );
  }
}



export default Home;