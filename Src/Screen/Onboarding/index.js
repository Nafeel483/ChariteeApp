import React, {Component} from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import FirstScreen from './firstScreen';
import SecondScreen from './secondScreen';
import ThirdScreen from './thirdScreen';

export default class ViewPagerPage extends Component {
  render() {
    return (
      <ViewPager style={{height: '100%', backgroundColor: 'white'}}>
        <View>
          <FirstScreen navigation={this.props.navigation} />
        </View>
        <View>
          <SecondScreen navigation={this.props.navigation} />
        </View>
        <View>
          <ThirdScreen navigation={this.props.navigation} />
        </View>
      </ViewPager>
    );
  }
}
