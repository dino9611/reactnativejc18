import React from 'react';
import {View, Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import RootStack from './src/navigations/RootStack';
import LogInScreen from './src/screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

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

const App = () => {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(async () => {
    // AsyncStorage.getItem('token')
    //   .then(res => {
    //     console.log(res);
    //     setloading(false);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // cara async await
    try {
      const res = await AsyncStorage.getItem('token');
      console.log(res);
      setloading(false);
      if (res) {
        dispatch({type: 'LOGIN'});
      }
      // if (res === 'dinos') {
      //   throw 'salah tokennya bro'; // string ini akan masuk ke variable error di catch
      // }
    } catch (error) {
      console.log('error message', error);
    }

    // setTimeout(() => {
    //   setloading(false);
    // }, 2000);
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
        {Auth.isLogin ? <RootStack /> : <StackAuth />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
