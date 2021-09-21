import React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

function LogOutScreen({navigation, route}) {
  const dispatch = useDispatch();

  const LogOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'LOGOUT'});
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LogOut Screen</Text>
      <Button title="buka Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="LOGOUt" onPress={LogOut} />
    </View>
  );
}

export default LogOutScreen;
