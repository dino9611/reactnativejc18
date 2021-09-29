import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Button, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {formatprice} from '../helpers';
import {Button as ButtonEl, Icon, Divider} from 'react-native-elements';
import {TextInput} from 'react-native';
import {axiosInstance} from '../helpers/axiosInstance';
import {UpdateCartAction} from '../redux/actions/AuthAction';
import * as Animatable from 'react-native-animatable';
const Checkout = ({navigation}) => {
  const [banks] = useState([
    {name: 'BCA', norek: '11000'},
    {name: 'mandiri', norek: '000111'},
  ]);
  const [indexPilBank, setindexpilbank] = useState(-1);
  const [alamat, setalamat] = useState('');
  const inputref = useRef();
  const {Auth} = useSelector(state => {
    return {
      Auth: state.Auth,
    };
  });

  const dispatch = useDispatch();
  const total = () => {
    let carts = Auth.carts;
    let hargaTotal = 0;
    // ? beberapa cara sum angka di array
    // carts.forEach(val => {
    //   hargaTotal += val.price * val.qty;
    // });
    // for (let i = 0; i < carts.length; i++) {
    //   hargaTotal += carts[i].price * carts[i].qty;
    // }
    hargaTotal = carts.reduce((total, currenvalue) => {
      return total + currenvalue.price * currenvalue.qty;
    }, 0);
    return hargaTotal;
  };

  const CheckoutHandler = async () => {
    let carts = Auth.carts;
    let pajak = total() * (10 / 100);
    let ongkir = 200000;
    let bank = banks[indexPilBank].name;
    let norek = banks[indexPilBank].norek;
    let userId = Auth.id;
    let transactionPost = {
      status: 'onWaiting',
      alamat: alamat,
      userId: userId,
      pajak: pajak,
      ongkir: ongkir,
      bank: bank,
      bukti: '',
      norek: norek,
      create_on: new Date(),
      last_update: new Date(),
    };
    try {
      const res = await axiosInstance.post(`/transactions`, transactionPost);
      let transactionId = res.data.id;
      // looping axios asyn with async await
      carts.forEach(async val => {
        let obj = {
          transactionId: transactionId,
          price: val.price,
          productId: val.id,
          qty: val.qty,
        };
        return axiosInstance.post(`/transactionDetails`, obj);
      });
      dispatch(UpdateCartAction([], userId)); //kosongkan array
      //   dispasthc ddengan action itu cara lain kalo nggak mau pake connect
      setindexpilbank(-1);
      setalamat('');
      inputref.current.blur(); // gunanya buat biar tidak focus ke textinput atau ngilangin keyboard
      navigation.goBack(); //balikin lagi ke cart
      alert('berhasil checkout');
    } catch (error) {
      console.log(error);
    }

    // axiosInstance
    //   .post(`/transactions`, transactionPost)
    //   .then((res) => {
    //     console.log(res.data);
    //     let transactionId = res.data.id;
    //     // create array of promise (coding below)
    //     let transactionDetails = carts.map((val) => {
    //       let obj = {
    //         transactionId: transactionId,
    //         price: val.price,
    //         productId: val.id,
    //         qty: val.qty,
    //       };
    //       return axiosInstance.post(`/transactionDetails`, obj);
    //     });

    //     Promise.all(transactionDetails) // promise.all untuk ngelooping promise
    //       .then(() => {
    //         this.props.UpdateCartAction([], userId); //kosongkan array
    //         toast.success("berhasil checkout");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const zoomOut = {
    0: {
      opacity: 0,
      scaleY: 0,
    },
    0.5: {
      opacity: 1,
      scaleY: 0.4,
    },
    1: {
      opacity: 1,
      scaleY: 1,
    },
  };

  const renderBank = () => {
    if (indexPilBank >= 0) {
      let val = banks[indexPilBank];
      return (
        <Animatable.View
          useNativeDriver={true}
          animation={zoomOut}
          style={{flexDirection: 'row'}}>
          <ButtonEl
            key={val.name}
            title={val.name + ' : ' + val.norek}
            type={'solid'}
            buttonStyle={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '100%',
            }}
            containerStyle={{width: '70%', marginRight: 'auto'}}
          />
          <ButtonEl
            title="cancel"
            type="outline"
            containerStyle={{width: '20%', marginRight: 'auto'}}
            onPress={() => setindexpilbank(-1)}
          />
        </Animatable.View>
      );
    }
    return banks.map((val, index) => {
      return (
        <Animatable.View useNativeDriver={true} animation={zoomOut}>
          <ButtonEl
            key={index}
            title={val.name + ' : ' + val.norek}
            type={'clear'}
            buttonStyle={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
            onPress={() => setindexpilbank(index)}
          />
        </Animatable.View>
      );
    });
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginBottom: 10,
        }}>
        <Text style={{marginBottom: 5}}>
          {indexPilBank < 0 ? 'Pilih bank' : 'Bank terpilih'}
        </Text>
        <View>{renderBank()}</View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginBottom: 10,
        }}>
        <Text>Alamat :</Text>
        <TextInput
          ref={inputref}
          placeholder={'alamat'}
          placeholderTextColor="gray"
          value={alamat}
          onChangeText={text => setalamat(text)}
          style={{
            borderWidth: 2,
            borderRadius: 5,
            marginTop: 5,
            borderColor: 'black',
            padding: 10,
            color: 'black',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginBottom: 10,
        }}>
        <Text>Rincian :</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 'auto'}}>Total :</Text>
          <Text>Rp. {formatprice(total())}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 'auto'}}>Pajak 10% :</Text>
          <Text>Rp. {formatprice(total() * 0.1)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 'auto'}}>Ongkir :</Text>
          <Text>Rp. {formatprice(200000)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 'auto'}}></Text>
          <Text>+</Text>
        </View>
        <Divider orientation="horizontal" width={1} color="black" />

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 'auto'}}>Grand Total :</Text>
          <Text>Rp. {formatprice(total() + total() * 0.1 + 200000)}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 'auto',
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginBottom: 10,
        }}>
        <ButtonEl title="Checkout" onPress={CheckoutHandler} />
      </View>
    </View>
  );
};

export default Checkout;
