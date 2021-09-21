import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailFeed({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Feed Screen {route.params.name}</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailFeed;
