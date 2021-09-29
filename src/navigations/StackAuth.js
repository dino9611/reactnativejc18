import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogInScreen from '../screens/Login';
import Register from '../screens/Register';
const Stack = createStackNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackAuth;
