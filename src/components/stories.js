import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'native-base';

const Stories = ({isDarkmode}) => {
  const {AvatarContainer} = styles;
  const warnaText = isDarkmode ? 'white' : 'black';
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
      <LinearGradient
        colors={['#833ab4', '#fd1d1d', '#fc6d33', '#d62976']}
        locations={[0, 0.31, 0.67, 0.92]}
        style={{
          padding: 3.5,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Avatar
          // style={storyBorder}
          size="lg"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
          }}>
          1
        </Avatar>
      </LinearGradient>
      <Text style={[{color: warnaText}, {fontSize: 12, fontWeight: '400'}]}>
        Your Story
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});

export default Stories;
