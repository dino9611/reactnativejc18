import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  RefreshControl,
  ActivityIndicator,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {API_URL} from '../helpers';

class DetailProduct extends Component {
  state = {
    qty: 1,
  };

  render() {
    const {navigation, route} = this.props;
    const {name, image} = route.params.data;
    const {qty} = this.state;
    return (
      <View>
        <ImageBackground
          style={{
            width: '100%',
            height: 300,
            // padding: 10,
          }}
          imageStyle={{
            width: '100%',
            height: '100%',
          }}
          source={{uri: image}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 10,
            }}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={{backgroundColor: 'white', padding: 5}}>
                <Text>Back</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={{backgroundColor: 'white', padding: 5}}>
              <Text>Love</Text>
            </View>
          </View>
        </ImageBackground>
        <Text>INI Detail Product {name} </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 10,
              marginRight: 20,
            }}>
            <Text>QTY </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              //   justifyContent: 'flex-end',
              marginRight: 10,
            }}>
            <TouchableWithoutFeedback
              onPress={() => this.setState({qty: qty - 1})}>
              <View
                style={{
                  padding: 2,
                  width: '10%',
                  alignItems: 'center',
                  backgroundColor: 'black',
                }}>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  -
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                padding: 2,
                width: '20%',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{qty}</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => this.setState({qty: qty + 1})}>
              <View
                style={{
                  padding: 2,
                  width: '10%',
                  alignItems: 'center',
                  backgroundColor: 'black',
                }}>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  +
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default DetailProduct;
