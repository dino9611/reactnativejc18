import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';

const NativeStack = createNativeStackNavigator();

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

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* initialorute name ngsih tau dimana render yang pertama kali */}
        <NativeStack.Navigator initialRouteName="Detail">
          <NativeStack.Screen
            name="Home"
            component={Home}
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
