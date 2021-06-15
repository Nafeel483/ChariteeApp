import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from '../Screen/Onboarding/firstScreen';
import SecondScreen from '../Screen/Onboarding/secondScreen';
import ThirdScreen from '../Screen/Onboarding/thirdScreen';

const HomeNavigation = createStackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
    SecondScreen: { screen: SecondScreen },
    ThirdScreen: { screen: ThirdScreen },

  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);
export default HomeNavigation;
