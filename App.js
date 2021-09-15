/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ImageBackground,
  useColorScheme,
  Button,
  Platform,
  View,
  TextInput,
  KeyboardAvoidingView,
  RefreshControl,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import H1 from './src/components/h1';
import MenuGeser from './src/components/MenuGeser';
import Data from './src/assets/data.json';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

// const App = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeAreaContainer}>
//       {/* <KeyboardAvoidingView
//         style={{flex: 1}}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <ScrollView
//           refreshControl={
//             <RefreshControl
//               colors={['tomato', 'purple']}
//               refreshing={refreshing}
//               onRefresh={onRefresh}
//               progressBackgroundColor={'red'}
//             />
//           }>
//           <View>
//             <ImageBackground
//               style={{
//                 height: 400,
//                 width: '100%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//               source={require('./src/assets/login-1.jpg')}>
//               <Text style={{color: 'white'}}>dasda</Text>
//             </ImageBackground>
//           </View>
//           <View>
//             <ImageBackground
//               style={{
//                 height: 400,
//                 width: '100%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//               source={require('./src/assets/login-1.jpg')}>
//               <Text style={{color: 'white'}}>dasda</Text>
//             </ImageBackground>
//           </View>
//           <View>
//             <TextInput placeholder="tes" style={styles.textInput} />
//           </View>

//           <Button title="Press me" onPress={() => console.log('tes')} />
//         </ScrollView>
//       </TouchableWithoutFeedback>
//       {/* </KeyboardAvoidingView> */}
//     </SafeAreaView>
//   );
// };

const HeaderComponent = () => {
  const [name, setname] = useState('');
  const [color, setcolor] = useState('black');
  const [status, setstatus] = useState('SEE');
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const inputLoginChange = (text, props) => {
    setLoginData({...loginData, [props]: text});
  };

  const toogle = () => {
    if (status === 'SEE') {
      setstatus('HIDE');
    } else {
      setstatus('SEE');
    }
  };

  return (
    <View>
      {/* <View style={[styles.container1]}>
      <View style={{paddingHorizontal: 12, paddingTop: 20}}>
        <Text style={[styles.textWhite, {marginBottom: 20}]}>
          Dunder Mifflin, inc
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <H1>Michael Scott</H1>
            <H1 size={16}>General Manager</H1>
          </View>
          <View
            style={{
              width: 60,
              height: 60,
            }}>
            <Image
              style={{height: '100%', width: '100%', borderRadius: 30}}
              source={require('./src/assets/login-1.jpg')}
            />
          </View>
        </View>
        <View style={styles.menu}>
          <View style={[styles.submenu1, styles.center]}>
            <Text>1</Text>
          </View>
          <View style={[styles.submenu2, styles.center]}>
            <Text>2</Text>
          </View>
          <View style={[styles.submenu1, styles.center]}>
            <Text>3</Text>
          </View>
          <View style={[styles.submenu2, styles.center]}>
            <Text>4</Text>
          </View>
          <View style={[styles.submenu2, styles.center]}>
            <Text>5</Text>
          </View>
          <View style={[styles.submenu1, styles.center]}>
            <Text>6</Text>
          </View>
          <View style={[styles.submenu2, styles.center]}>
            <Text>7</Text>
          </View>
          <View style={[styles.submenu1, styles.center]}>
            <Text>8</Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{paddingLeft: 12, marginRight: 2}}>
        <MenuGeser>1</MenuGeser>
        <MenuGeser>2</MenuGeser>
        <MenuGeser>3</MenuGeser>
        <MenuGeser>4</MenuGeser>
      </ScrollView>
    </View> */}
      <View>
        <TextInput
          onChangeText={text => inputLoginChange(text, 'username')}
          placeholderTextColor="gray"
          placeholder="username"
          value={loginData.username}
          style={[styles.textInput, {borderColor: color, marginBottom: 10}]}
          // keyboardType={'number-pad'} buat nentui keyboard apa yang mau digunakan
          // onFocus={() => setcolor('blue')}
          // onBlur={() => setcolor('black')}
        />
        <View
          style={[styles.textInput, {flexDirection: 'row', marginBottom: 10}]}>
          <TextInput
            onChangeText={text => inputLoginChange(text, 'password')}
            placeholderTextColor="gray"
            placeholder="password"
            secureTextEntry={status === 'SEE'}
            value={loginData.password}
            style={[{width: '90%', color: 'black'}]}
            // keyboardType={'number-pad'}
            // onFocus={() => setcolor('blue')}
            // onBlur={() => setcolor('black')}
          />
          <TouchableOpacity onPress={toogle}>
            <View style={styles.center}>
              <Text>{status}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <Button title="hasil" onPress={() => console.log(name)}  /> */}
        <TouchableWithoutFeedback onPress={() => console.log(loginData)}>
          <View style={[styles.buttonOutline, styles.center]}>
            <Text style={{color: '#ca2c37'}}>Hasil</Text>
          </View>
        </TouchableWithoutFeedback>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;
const App = () => {
  const [products] = useState(Data.products);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          {
            marginHorizontal: 10,
            marginBottom: 40,
            backgroundColor: 'white',
            width: '45%',
          },
          styles.shadow,
        ]}>
        <View style={{width: '100%', height: windowHeight * (30 / 100)}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={{uri: item.image}}
            resizeMode="cover"
          />
          <View>
            <Text>{item.name}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#ca2c37', height: '100%'}}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar backgroundColor={'#ca2c37'} />

        <FlatList
          ListHeaderComponent={<HeaderComponent />}
          data={products}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'white',
    flex: 1,
  },

  textInput: {
    height: 40,
    borderColor: '#000000',
    color: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  container1: {
    backgroundColor: '#ca2c37',
    height: windowHeight * (60 / 100),
    // paddingHorizontal: 12,
    // paddingTop: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
  menu: {
    backgroundColor: 'white',
    height: windowHeight * (25 / 100),
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  submenu1: {
    backgroundColor: 'tomato',
    width: '25%',
    height: (windowHeight * (25 / 100)) / 2,
  },
  submenu2: {
    backgroundColor: 'skyblue',
    width: '25%',
    height: (windowHeight * (25 / 100)) / 2,
  },
  buttonOutline: {
    borderColor: '#ca2c37',
    borderWidth: 1,
    paddingVertical: 5,

    backgroundColor: 'white',
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom: 30,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default App;
