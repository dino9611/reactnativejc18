import React from 'react';

import {Text, View, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const MenuGeser = ({children}) => {
  return (
    <View
      style={{
        width: 150,
        backgroundColor: 'gray',
        height: windowHeight * (8 / 100),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
      }}>
      <Text>{children}</Text>
    </View>
  );
};

export default MenuGeser;
