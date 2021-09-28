import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNav from './DrawNav';
import DetailsScreen from './../screens/Details';
import DetailFeed from './../screens/DetailFeed';
import DetailProduct from '../screens/DetailProduct';
import Checkout from '../screens/checkout';
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
        name="DetailProd"
        options={{headerShown: false}}
        component={DetailProduct}
      />
      <NativeStack.Screen name="Checkout" component={Checkout} />
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
