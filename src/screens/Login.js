import React, {useState, useRef, useReducer} from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Input, Icon, Button, Text as TextElem} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../helpers';

const initialState = {username: '', password: '', err: '', loading: false};

function reducer(state, action) {
  switch (action.type) {
    case 'username':
      return {...state, username: action.payload};
    case 'password':
      return {...state, password: action.payload};
    case 'start':
      return {...state, loading: true};
    case 'finish':
      return {...state, loading: false};
    default:
      return state;
  }
}

function LogInScreen({navigation, route}) {
  const dispatch = useDispatch();
  const [focus, setfocus] = useState('');
  const [secure, setsecure] = useState(true);

  const [state, dispatchlocal] = useReducer(reducer, initialState);
  // console.log(state, 'usereducer');
  const passref = useRef();

  const masuk = async () => {
    dispatchlocal({type: 'start'});
    try {
      let {username, password} = state;
      // let {data} = await axios.get(
      //   `${API_URL}/users?username=${username}&password=${password}`,
      // );
      let {data} = await axios.get(`${API_URL}/users`, {
        params: {
          username: username,
          password: password,
        },
      });
      if (data.length) {
        await AsyncStorage.setItem('token', String(data[0].id)); //value harus string
        dispatchlocal({type: 'finish'});
        dispatch({type: 'LOGIN', payload: data[0]});
      } else {
        throw 'user tidak ditemukan';
      }
    } catch (error) {
      alert(error);
      dispatchlocal({type: 'finish'});
    }

    //  AsyncStorage.setItem('token', 'dino')
    //   .then(() => {
    //     dispatch({type: 'LOGIN'});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <TextElem h1>Login</TextElem>
        <Input
          onFocus={() => setfocus('username')}
          onBlur={() => setfocus('')}
          label={'Username'}
          value={state.username}
          onChangeText={text =>
            dispatchlocal({type: 'username', payload: text})
          }
          blurOnSubmit={false}
          onSubmitEditing={() => passref.current.focus()}
          labelStyle={focus === 'username' ? {color: 'red'} : null}
          containerStyle={{borderColor: 'red'}}
          placeholder="username"
          leftIcon={
            <Icon
              name="user"
              type="antdesign"
              color={focus === 'username' ? 'red' : null}
            />
          }
          // errorMessage={''}
          inputContainerStyle={
            focus === 'username' ? {borderColor: 'red'} : null
          }
        />
        <Input
          // inputStyle={{fontSize: 30}}
          // errorMessage={''}
          value={state.password}
          ref={passref}
          onChangeText={text =>
            dispatchlocal({type: 'password', payload: text})
          }
          secureTextEntry={secure}
          onFocus={() => setfocus('password')}
          onBlur={() => setfocus('')}
          labelStyle={focus === 'password' ? {color: 'red'} : null}
          label={'Password'}
          containerStyle={{borderColor: 'red'}}
          placeholder="Password"
          leftIcon={
            <Icon
              name="lock"
              type="antdesign"
              color={focus === 'password' ? 'red' : null}
            />
          }
          rightIcon={
            <Icon
              name={secure ? 'eye-off' : 'eye'}
              type="ionicon"
              onPress={() => setsecure(!secure)}
              // color={focus === 'password' ? 'red' : null}
            />
          }
          inputContainerStyle={
            focus === 'password' ? {borderColor: 'red'} : null
          }
        />
        <Button
          containerStyle={{width: '95%'}}
          buttonStyle={{borderColor: 'red'}}
          titleStyle={{color: 'red'}}
          raised
          title="Login"
          loading={state.loading}
          type="outline"
          onPress={masuk}
        />
        <Button
          containerStyle={{width: '95%', marginTop: 10}}
          buttonStyle={{borderColor: 'red', backgroundColor: 'white'}}
          titleStyle={{color: 'red'}}
          raised
          title="To Register"
          onPress={() => navigation.navigate('Register')}
        />
        {/* <Button title="masuk" onPress={masuk} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LogInScreen;
