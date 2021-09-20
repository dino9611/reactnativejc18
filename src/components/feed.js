import React from 'react';

import {
  Text,
  Image,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {Avatar} from 'native-base';
import AvatarGroup from './avatarGroup';

const windowHeight = Dimensions.get('window').height;
const Feed = ({isDarkmode, data, navigation}) => {
  const warnaText = isDarkmode ? 'white' : 'black';

  return (
    <View
      style={{
        marginHorizontal: 0,
        marginVertical: 5,
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('DetailFeed', {name: data.name})}>
          <Text style={{marginLeft: 5, color: warnaText}}>{data.name}</Text>
        </TouchableWithoutFeedback>
        <View style={{marginLeft: 'auto'}}>
          <Icon type="feather" name="more-horizontal" color={warnaText} />
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
          color={warnaText}
        />
        <Icon
          style={{marginHorizontal: 7}}
          name="comment-o"
          type="font-awesome"
          color={warnaText}
        />
        <Icon
          style={{marginHorizontal: 7}}
          name="paper-plane-o"
          type="font-awesome"
          color={warnaText}
        />
        <View style={{marginLeft: 'auto', marginRight: 10}}>
          <Icon name="bookmark-o" type="font-awesome" color={warnaText} />
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
        <View style={{marginLeft: 5}}>
          <Text style={{color: warnaText}}>Liked by kenzons and 5 others</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 5, marginTop: 5}}>
        <Text>
          <Text style={{fontWeight: 'bold', color: warnaText}}>User1</Text>{' '}
          <Text style={{color: warnaText}}>Caption blablabla</Text>
        </Text>
      </View>
      <View style={{paddingHorizontal: 5, marginTop: 5}}>
        <Text style={{color: 'gray'}}>View All 1000 comments</Text>
      </View>
    </View>
  );
};

export default Feed;
