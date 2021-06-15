import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Images from '../../Styles/Images';
import * as Constants from '../../Constants';
import Styles from './Styles';

class FristScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }

  render() {
    return (
      <View style={Styles.mainConatiner}>

        <View style={Styles.mainContainer}>
          <Image source={Images.Finances} style={Styles.introFirstImage} />
        </View>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.titleText}>{Constants.ANYWHERE_AT_ANYTIME}</Text>
          <Text style={Styles.descriptionText}>{Constants.ANYWHERE_DESCRIPTION}</Text>

          <Image source={Images.indicator1} style={Styles.indecatorStyle} />

          <TouchableOpacity style={Styles.donateButton}
            onPress={() => { this.props.navigation.navigate('SecondScreen') }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.donateText}>{Constants.CONTINUE}</Text>
              <Image source={Images.right} style={Styles.rightArrowStyle} />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}



export default FristScreen;