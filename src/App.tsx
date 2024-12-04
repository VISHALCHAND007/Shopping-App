import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

export type RootStackParamsList = {
  HomeScreen: undefined;
  DetailsScreen: {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Trending Products'}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
