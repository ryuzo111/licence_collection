/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'ホーム',
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <Icon name="home" size={30} color="black" />
                  ) : (
                    <Icon name="home" size={30} color="grey" />
                  ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                title: '設定',
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <FeatherIcon name="settings" size={30} color="black" />
                  ) : (
                    <FeatherIcon name="settings" size={30} color="grey" />
                  ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
