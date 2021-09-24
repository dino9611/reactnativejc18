import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screen
import Home from './../screens/Home';
import ProductScreen from './../screens/Product';
import CartScreen from './../screens/Cart';
import ProfileScreen from './../screens/ProfIle';
import {connect} from 'react-redux';
import {Icon, Badge} from 'react-native-elements';

const TabNav = createBottomTabNavigator();

const HomeTab = ({Auth}) => {
  return (
    <TabNav.Navigator
      screenOptions={({route}) => {
        return {
          tabBarInactiveTintColor: 'lightgray',
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            // size = focused ? 30 : size;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Products') {
              iconName = focused ? 'message' : 'message';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'add-shopping-cart' : 'add-shopping-cart';
              if (Auth.carts.length) {
                return (
                  <View>
                    <Badge
                      value={Auth.carts.length}
                      containerStyle={{
                        position: 'absolute',
                        top: -5,
                        right: -4,
                        elevation: 2,
                      }}
                      status="error"
                    />
                    <Icon name={iconName} color={color} size={30} />
                  </View>
                );
              }
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
      }}>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Products" component={ProductScreen} />
      <TabNav.Screen name="Cart" component={CartScreen} />
      <TabNav.Screen name="Profile" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapStateToProps)(HomeTab);
