import React from 'react';

import {
  Dimensions,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';

const windowHeight = Dimensions.get('window').height;

const Header = ({isDarkmode, setDarkMode, navigation}) => {
  // console.log(Appearance.getColorScheme());
  const warnaText = isDarkmode ? 'white' : 'black';
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
          height: windowHeight * (8 / 100),
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
        <TouchableWithoutFeedback onPress={() => navigation.push('Detail')}>
          <Text>
            <Icon name="heart-o" type="font-awesome" color={warnaText} />
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setDarkMode(!isDarkmode)}>
          <Text>
            <Icon
              name="facebook-messenger"
              type="material-community"
              color={warnaText}
            />
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Header;
