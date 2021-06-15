import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeNavigation from './HomeNavigation';
import IntroNavigation from './IntroNavigation';
import AuthNavigation from './AuthNavigation';


const AppNavigator = createSwitchNavigator(
  {
    IntroNavigation: IntroNavigation,
    AuthNavigation: AuthNavigation,
    HomeNavigation: HomeNavigation,
  },
  {
    initialRouteName: 'IntroNavigation',
  },
);
export default createAppContainer(AppNavigator);
