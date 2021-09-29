import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import RootStack from './src/navigations/RootStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {API_URL} from './src/helpers';
import SplashScreen from './src/screens/Splash';
import StackAuth from './src/navigations/StackAuth';

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
        {/* <StackAuth /> */}
        {/* <RootStack /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
