import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
  const [size, setsize] = useState(16);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Animatable.Text
        easing="ease-out"
        iterationCount="infinite"
        animation="bounce"
        style={{fontSize: size}}>
        ini SplashScreen
      </Animatable.Text>
      {/* <Button title="pencet" onPress={() => setsize(size + 3)} /> */}
    </View>
  );
};
export default SplashScreen;
