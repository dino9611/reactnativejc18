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
  Appearance,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import MenuGeser from './src/components/MenuGeser';

import Data from './src/assets/data.json';
import {Avatar, NativeBaseProvider} from 'native-base';

const windowHeight = Dimensions.get('window').height;

const Stories = ({darkmode}) => {
  const {storyBorder, AvatarContainer} = styles;
  const warnaText = darkmode ? 'white' : 'black';
  {
    /* <View style={AvatarContainer}>
              <Avatar
                style={storyBorder}
                size="lg"
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
                }}>
                2
              </Avatar>
              <Text>Bams</Text>
            </View> */
  }
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
      <Text style={{color: warnaText}}>Your Story</Text>
    </View>
  );
};

const Header = ({darkmode}) => {
  // console.log(Appearance.getColorScheme());
  const warnaText = darkmode ? 'white' : 'black';
  return (
    <View
      style={{
        paddingHorizontal: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Image
        style={{
          width: '30%',
          height: windowHeight * (9 / 100),
          tintColor: warnaText,
        }}
        resizeMode="contain"
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '30%',
          justifyContent: 'space-around',
        }}>
        <Text>
          <Icon name="plus-square-o" type="font-awesome" color={warnaText} />
        </Text>
        <Text>
          <Icon name="heart-o" type="font-awesome" color={warnaText} />
        </Text>
        <Text>
          <Icon
            name="facebook-messenger"
            type="material-community"
            color={warnaText}
          />
        </Text>
      </View>
    </View>
  );
};

const AvatarGroup = () => {
  return (
    <Avatar.Group size={'xs'} max={2}>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
        }}>
        SS
      </Avatar>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}>
        AK
      </Avatar>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}>
        RS
      </Avatar>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}>
        MR
      </Avatar>
      <Avatar
        source={{
          uri: 'https://bit.ly/code-beast',
        }}>
        CB
      </Avatar>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}>
        GG
      </Avatar>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}>
        RS
      </Avatar>
      <Avatar
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}>
        MR
      </Avatar>
    </Avatar.Group>
  );
};

const Feed = () => {
  return (
    <View
      style={{
        marginHorizontal: 0,
        marginVertical: 10,
        paddingHorizontal: 0,
        paddingBottom: 0,
        // backgroundColor: 'black',
      }}>
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        <Avatar
          source={{
            uri: 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
        <Text style={{marginLeft: 5}}>User1</Text>
        <View style={{marginLeft: 'auto'}}>
          <Icon type="feather" name="more-horizontal" />
        </View>
      </View>
      <View style={{marginVertical: 10, height: windowHeight * 0.4}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          style={{marginHorizontal: 7}}
          name="heart-o"
          type="font-awesome"
          color={'black'}
        />
        <Icon
          style={{marginHorizontal: 7}}
          name="comment-o"
          type="font-awesome"
          color={'black'}
        />
        <Icon
          style={{marginHorizontal: 7}}
          name="paper-plane-o"
          type="font-awesome"
          color={'black'}
        />
        <View style={{marginLeft: 'auto', marginRight: 10}}>
          <Icon name="bookmark-o" type="font-awesome" color={'black'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
          marginTop: 10,
        }}>
        <View>
          <AvatarGroup />
        </View>
        <View>
          <Text>Liked by kenzons and 5 others</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 5, marginTop: 5}}>
        <Text>
          <Text style={{fontWeight: 'bold'}}>User1</Text>{' '}
          <Text>Caption blablabla</Text>
        </Text>
      </View>
      <View style={{paddingHorizontal: 5, marginTop: 5}}>
        <Text style={{color: 'gray'}}>View All 1000 comments</Text>
      </View>
    </View>
  );
};

const Atas = ({isDarkmode}) => {
  const {mainContainer, storyBorder, storyContainer, AvatarContainer} = styles;

  return (
    <>
      <Header darkmode={isDarkmode} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={storyContainer}>
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
        <Stories darkmode={isDarkmode} />
      </ScrollView>
    </>
  );
};

const App = () => {
  const {mainContainer, storyBorder, storyContainer, AvatarContainer} = styles;
  const [isDarkmode, setDarkMode] = useState(false);
  const backgroundColors = isDarkmode ? '#111111' : 'white';
  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={backgroundColors}
        barStyle={isDarkmode ? 'light-content' : 'dark-content'}
      />
      <View style={[mainContainer, {backgroundColor: backgroundColors}]}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            ListHeaderComponent={<Atas isDarkmode={isDarkmode} />}
            data={[1, 2, 3, 4]}
            renderItem={() => <Feed />}
          />
          <View>
            <Text>Navigator</Text>
          </View>
        </SafeAreaView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'white',
    // backgroundColor: '#111111',

    // height: '100%',
    flex: 1,
    // paddingVertical: 10,
  },
  storyContainer: {
    marginLeft: 5,
  },
  AvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  storyBorder: {
    borderColor: 'orange',
    borderWidth: 1.5,
  },
});

export default App;
