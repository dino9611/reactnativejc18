import React from 'react';
import {View, Text, Button} from 'react-native';

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
      <Button
        title="To profile screen"
        onPress={() =>
          navigation.navigate('HomeTab', {
            screen: 'Profile',
            params: {user: 'jane'},
          })
        }
      />
    </View>
  );
}
export default DetailsScreen;
