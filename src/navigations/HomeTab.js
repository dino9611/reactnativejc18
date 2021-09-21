import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screen
import Home from './../screens/Home';
import ProductScreen from './../screens/Product';
import CartScreen from './../screens/Cart';
import ProfileScreen from './../screens/ProfIle';

import {Icon} from 'react-native-elements';

const TabNav = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <TabNav.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            // size = focused ? 30 : size;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Products') {
              iconName = focused ? 'message' : 'message';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'add-shopping-cart' : 'add-shopping-cart';
            } else {
              iconName = focused ? 'account-circle' : 'account-circle';
            }
            return <Icon name={iconName} color={color} size={30} />;
          },
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => {
            return null; // label pada icon tidak ada
          },
        };
      }}
      tabBarOptions={{
        inactiveTintColor: 'lightgray',
        activeTintColor: 'black',
        tabStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Products" component={ProductScreen} />
      <TabNav.Screen name="Cart" component={CartScreen} />
      <TabNav.Screen name="Profile" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

export default HomeTab;
