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
import axios from 'axios';
import {API_URL} from './src/helpers';
import Register from './src/screens/Register';

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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Register" component={Register} />
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
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      // setloading(false);
      if (token) {
        const res = await axios.get(`${API_URL}/users/${token}`);
        dispatch({type: 'LOGIN', payload: res.data});
      }
      // if (res === 'dinos') {
      //   throw 'salah tokennya bro'; // string ini akan masuk ke variable error di catch
      // }
    } catch (error) {
      console.log('error message', error);
    } finally {
      setloading(false);
    }
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
