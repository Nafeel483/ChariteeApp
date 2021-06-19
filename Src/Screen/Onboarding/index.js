import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import Styles from './Styles';

const slides = [
  {
    key: 1,
    title: Constants.ANYWHERE_AT_ANYTIME,
    text: Constants.ANYWHERE_DESCRIPTION,
    image: Images.Finances,
    backgroundColor: 'white',
    button: Constants.CONTINUE,
  },
  {
    key: 2,
    title: Constants.ANYWHERE_AT_ANYTIME,
    text: Constants.ANYWHERE_DESCRIPTION,
    image: Images.Searching_Looking,
    backgroundColor: 'white',
    button: Constants.CONTINUE,
  },
  {
    key: 3,
    title: Constants.ANYWHERE_AT_ANYTIME,
    text: Constants.ANYWHERE_DESCRIPTION,
    image: Images.Globe,
    backgroundColor: 'white',
    button: Constants.GET_STARTED,
  },
];

export default class ViewPagerPage extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      showRealApp: false,
      next: 0,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={Styles.mainConatiner}>
        <View style={Styles.mainContainer}>
          <Image source={item.image} style={Styles.introSecondImage} />
        </View>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.titleText}>{item.title}</Text>
          <Text style={Styles.descriptionText1}>{item.text}</Text>
        </View>
      </View>
    );
  };
  goNext = () => {
    this.setState({ next: this.state.next + 1 });
    this.slider?.goToSlide(this.state.next + 1, true);
  };
  RenderNextButton = () => {
    return (
      <TouchableOpacity
        style={Styles.donateButton}
        onPress={() => this.goNext()}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={Styles.donateText}>{Constants.CONTINUE}</Text>
          <Image source={Images.right} style={Styles.rightArrowStyle} />
        </View>
      </TouchableOpacity>
    );
  };
  RenderDoneButton = () => {
    return (
      <TouchableOpacity
        style={Styles.donateButton}
        onPress={() => {
          this.props.navigation.navigate('Welcome');
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={Styles.donateText}>{Constants.GET_STARTED}</Text>
          <Image source={Images.right} style={Styles.rightArrowStyle} />
        </View>
      </TouchableOpacity>
    );
  };
  changeSlide = (e) => {
    this.setState({ next: e });
  };
  render() {
    return (
      <AppIntroSlider
        ref={(ref) => (this.slider = ref)}
        onSlideChange={(e) => this.changeSlide(e)}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        bottomButton={true}
        renderNextButton={this.RenderNextButton}
        renderDoneButton={this.RenderDoneButton}
        dotStyle={{ backgroundColor: '#ECEBED' }}
        activeDotStyle={{ backgroundColor: Colors.appHeaderColor }}
      />
    );
  }
}
