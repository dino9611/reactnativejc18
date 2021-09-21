import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/Home';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';

const NativeStack = createNativeStackNavigator();
const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to detail again"
        onPress={() => navigation.push('Detail')}
      />
      <Button title="back" onPress={() => navigation.goBack()} />
      <Button
        title="To profile screen"
        onPress={() =>
          navigation.navigate('HomeTab', {
            screen: 'Profile',
            params: {user: 'jane'},
          })
        }
      />
    </View>
  );
}

function DetailFeed({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Feed Screen {route.params.name}</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ProfileScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen {route.params?.user}</Text>
      <Button title="buka Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function ProductScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Products Screen</Text>
    </View>
  );
}
function CartScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Carts Screen</Text>
    </View>
  );
}
function LogOutScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LogOut Screen</Text>
      <Button title="buka Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function LogInScreen({navigation, route}) {
  const dispatch = useDispatch();

  const masuk = () => {
    dispatch({type: 'LOGIN'});
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LogIn Screen</Text>
      <Button title="masuk" onPress={masuk} />
    </View>
  );
}

//? structure Navigator
{
  /*
  StackNav
      -drawerNav
          -hometab
              -Home
              -Product
              -cart
              -profile
          -logout
      -detail
      -detailfeed
  StackNav 
  */
}

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

const StackAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LogInScreen} />
    </Stack.Navigator>
  );
};

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>ini SplashScreen</Text>
    </View>
  );
};

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

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  const {Auth} = useSelector(state => {
    return {
      Auth: state.Auth,
    };
  });

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* initialorutename ngsih tau dimana render yang pertama kali */}

        {Auth.isLogin ? <RootStack /> : <StackAuth />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({
//   mainContainer: {
//     // backgroundColor: 'white',
//     // backgroundColor: '#111111',

//     // height: '100%',
//     flex: 1,
//     // paddingVertical: 10,
//   },
//   storyContainer: {
//     marginLeft: 5,
//   },
//   AvatarContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 8,
//   },
//   storyBorder: {
//     borderColor: 'transparent',
//     borderWidth: 1.5,
//   },
// });

export default App;
