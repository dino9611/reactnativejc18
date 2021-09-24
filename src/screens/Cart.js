import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
function CartScreen({navigation, route}) {
  const [angka, setangka] = useState(1);

  useEffect(() => {
    console.log('cart didmount');

    return () => {
      console.log('cart product');
    };
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Carts Screen {angka}</Text>
      <Button title="tambah" onPress={() => setangka(angka + 1)} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapStateToProps)(CartScreen);
