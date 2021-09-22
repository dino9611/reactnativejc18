import React, {useState, useRef, useReducer} from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Input, Icon, Button, Text as TextElem} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../helpers';

const initialState = {
  username: '',
  password: '',
  confirmPass: '',
  err: '',
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'username':
      return {...state, username: action.payload};
    case 'password':
      return {...state, password: action.payload};
    case 'confirmPass':
      return {...state, confirmPass: action.payload};
    case 'start':
      return {...state, loading: true};
    case 'finish':
      return {...state, loading: false};
    default:
      return state;
  }
}

function Register({navigation, route}) {
  const dispatch = useDispatch();
  const [focus, setfocus] = useState('');
  const [secure, setsecure] = useState(true);

  const [state, dispatchlocal] = useReducer(reducer, initialState);
  // console.log(state, 'usereducer');
  const passref = useRef();

  const masuk = async () => {
    dispatchlocal({type: 'start'});
    try {
      let {username, password, confirmPass} = state;

      //?   cek passsword dan confirm password
      if (password != confirmPass) {
        throw 'pass dan confirm tidak sama';
      }
      //?   cek apakah username telah dipakai
      let {data} = await axios.get(`${API_URL}/users`, {
        params: {
          username: username,
        },
      });
      if (data.length) {
        //?   jika sudah dipakai
        throw 'username telah dipakai';
      } else {
        //?   jika belum dipakai
        //? maka data akan didaftarkan ke json server
        let data = {
          username,
          password,
          email: 'dinopwdk@gmail.com',
          role: 'user',
          carts: [],
        };
        //? untuk add data menggunakan method post
        let respon = await axios.post(`${API_URL}/users`, data);
        console.log(respon.data); // data respon yang didapat adalah object
        await AsyncStorage.setItem('token', String(respon.data.id)); //value harus string
        dispatchlocal({type: 'finish'});
        dispatch({type: 'LOGIN', payload: respon.data});
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
        <TextElem h1>Register</TextElem>
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
        <Input
          value={state.confirmPass}
          onChangeText={text =>
            dispatchlocal({type: 'confirmPass', payload: text})
          }
          secureTextEntry={secure}
          onFocus={() => setfocus('confirmpassword')}
          onBlur={() => setfocus('')}
          labelStyle={focus === 'confirmpassword' ? {color: 'red'} : null}
          label={'Confirm Password'}
          containerStyle={{borderColor: 'red'}}
          placeholder="Confirm Password"
          leftIcon={
            <Icon
              name="lock"
              type="antdesign"
              color={focus === 'confirmpassword' ? 'red' : null}
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
            focus === 'confirmpassword' ? {borderColor: 'red'} : null
          }
        />
        <Button
          containerStyle={{width: '95%'}}
          buttonStyle={{borderColor: 'red'}}
          titleStyle={{color: 'red'}}
          raised
          title="Register"
          loading={state.loading}
          type="outline"
          onPress={masuk}
        />
        <Button
          containerStyle={{width: '95%', marginTop: 10}}
          buttonStyle={{borderColor: 'red', backgroundColor: 'white'}}
          titleStyle={{color: 'red'}}
          raised
          title="To Login"
          onPress={() => navigation.navigate('Login')}
        />
        {/* <Button title="masuk" onPress={masuk} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Register;
