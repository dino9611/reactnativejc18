import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNav from './DrawNav';
import DetailsScreen from './../screens/Details';
import DetailFeed from './../screens/DetailFeed';
const NativeStack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <NativeStack.Screen name="Detail" component={DetailsScreen} />
      <NativeStack.Screen
        name="DetailFeed"
        component={DetailFeed}
        options={({route}) => ({
          title: `${route.params.name}`,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </NativeStack.Navigator>
  );
};
export default RootStack;
