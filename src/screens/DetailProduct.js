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
// import {API_URL} from '../helpers';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {AddToCartAction} from '../redux/actions/AuthAction';

class DetailProduct extends Component {
  state = {
    qty: 1,
  };

  onAddTocartClick = () => {
    const {route} = this.props;
    let userId = this.props.Auth.id;
    if (!this.props.Auth.isLogin) {
      alert('tidak bisa belanja karena belum login');
      return;
    }
    let dataProd = route.params.data;
    let AddCart = {
      ...dataProd,
      qty: parseInt(this.state.qty),
    };
    this.props.AddToCartAction(AddCart, userId);
  };

  render() {
    const {navigation, route} = this.props;
    const {name, image, price} = route.params.data;
    const {qty} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
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
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    borderRadius: 40,
                  }}>
                  <Icon name="arrow-back" />
                </View>
              </TouchableWithoutFeedback>
              <View
                style={{
                  borderRadius: 40,
                  backgroundColor: 'white',
                  padding: 5,
                }}>
                <Icon name="home" />
              </View>
            </View>
          </ImageBackground>
          <View style={{paddingHorizontal: 5}}>
            <Text
              style={{
                marginVertical: 5,
                fontSize: 30,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {name}
            </Text>
            <Text
              style={{
                marginVertical: 5,
                fontSize: 25,
                fontWeight: '500',
                textTransform: 'capitalize',
              }}>
              Rp.{price}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  justifyContent: 'center',
                  marginRight: 'auto',
                  // marginLeft: 10,
                  // marginRight: 20,
                }}>
                <Text style={{fontWeight: '600', fontSize: 20}}>Quantity </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '60%',
                  justifyContent: 'flex-end',
                  // marginRight: 10,
                }}>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({qty: qty - 1})}>
                  <View
                    style={{
                      padding: 2,
                      width: '30%',
                      alignItems: 'center',
                      backgroundColor: 'black',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      -
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{
                    padding: 2,
                    width: '40%',
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
                      width: '30%',
                      alignItems: 'center',
                      backgroundColor: 'black',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      +
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            justifyContent: 'space-between',
            height: 50,
            flexDirection: 'row',
          }}>
          <View>
            <Text>{price * this.state.qty}</Text>
          </View>
          <Button
            onPress={this.onAddTocartClick}
            icon={<Icon name="home" size={25} color="white" />}
            title="add to cart"
            containerStyle={{width: '50%'}}
            buttonStyle={{height: '100%'}}
            loading={this.props.Auth.loadingCarts}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapStateToProps, {AddToCartAction})(DetailProduct);
