import React from 'react';
import {View, Text} from 'react-native';

function ProductScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Products Screen</Text>
    </View>
  );
}

export default ProductScreen;
