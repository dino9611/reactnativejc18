import React from 'react';
import {View, Text, Button} from 'react-native';

import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
function LogInScreen({navigation, route}) {
  const dispatch = useDispatch();

  const masuk = async () => {
    await AsyncStorage.setItem('token', 'dino');
    dispatch({type: 'LOGIN'});

    //  AsyncStorage.setItem('token', 'dino')
    //   .then(() => {
    //     dispatch({type: 'LOGIN'});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LogIn Screen</Text>
      <Button title="masuk" onPress={masuk} />
    </View>
  );
}

export default LogInScreen;
