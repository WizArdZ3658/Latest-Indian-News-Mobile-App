import React from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen';
import NewsScreen from './src/screens/NewsScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator(
  {
    Welcome: {screen: WelcomeScreen},
    News: {screen: NewsScreen},
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(App);
