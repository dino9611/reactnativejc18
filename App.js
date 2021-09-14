/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

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
} from 'react-native';

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
const H1 = ({children, size}) => {
  // let {children,size} = props
  return (
    <Text
      style={{color: 'white', fontSize: size ? size : 23, fontWeight: 'bold'}}>
      {children}
    </Text>
  );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor={'#ca2c37'} />
      <ScrollView>
        <View style={[styles.container1]}>
          <Text style={[styles.textWhite, {marginBottom: 20}]}>
            Dunder Mifflin, inc
          </Text>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
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
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  container1: {
    backgroundColor: '#ca2c37',
    height: windowHeight * (60 / 100),
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
});

export default App;
