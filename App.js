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

import MenuGeser from './src/components/MenuGeser';
import Icon from 'react-native-vector-icons/FontAwesome';
import Data from './src/assets/data.json';
import {Avatar, NativeBaseProvider} from 'native-base';

const Stories = () => {
  const {storyBorder, AvatarContainer} = styles;
  return (
    <View style={AvatarContainer}>
      <Avatar
        style={storyBorder}
        size="lg"
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}>
        1
      </Avatar>
      <Text>Your Story</Text>
    </View>
  );
};

const App = () => {
  const {mainContainer, storyBorder, storyContainer, AvatarContainer} = styles;

  return (
    <NativeBaseProvider>
      <View style={mainContainer}>
        <SafeAreaView>
          <ScrollView horizontal style={storyContainer}>
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            {/* <View style={AvatarContainer}>
              <Avatar
                style={storyBorder}
                size="lg"
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
                }}>
                2
              </Avatar>
              <Text>Bams</Text>
            </View> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingVertical: 10,
  },
  storyContainer: {
    marginLeft: 5,
  },
  AvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  storyBorder: {
    borderColor: 'orange',
    borderWidth: 1.5,
  },
});

export default App;
