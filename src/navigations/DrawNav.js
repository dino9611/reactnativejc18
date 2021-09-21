import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import LogOutScreen from './../screens/Logout';
import HomeTab from './HomeTab';
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'lightgray',
        drawerType: 'slide',
        drawerPosition: 'right',
        headerShown: false,
        swipeEnabled: false,
        // drawerItemStyle:,
      })}>
      <Drawer.Screen name="HomeTab" component={HomeTab} />
      <Drawer.Screen name="LogOut" component={LogOutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
