import React from 'react';
import {View, Text, Button} from 'react-native';

function ProfileScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen {route.params?.user}</Text>
      <Button title="buka Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
export default ProfileScreen;
