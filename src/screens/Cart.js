import React, {useEffect, useState} from 'react';

import {View, Text, Button, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {formatprice} from '../helpers';
import {Button as ButtonEl, Icon} from 'react-native-elements';

const Header = ({children}) => {
  //props.children
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // height: 50,
        padding: 10,
      }}>
      <Text style={{fontSize: 25, fontWeight: '600'}}>{children}</Text>
    </View>
  );
};

function CartScreen({navigation, route, Auth}) {
  const [angka, setangka] = useState(1);

  useEffect(() => {
    console.log('cart didmount');
    console.log(Auth.carts);

    return () => {
      console.log('cart product');
    };
  }, []);

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

  const renderData = () => {
    if (Auth.carts.length) {
      let hasil = Auth.carts.map((val, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: 'white',
              elevation: 2,
              marginVertical: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 15,
                }}>
                <Image
                  source={{uri: val.image}}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <View>
                <Text style={{marginBottom: 5, textTransform: 'capitalize'}}>
                  {val.name}
                </Text>
                <Text style={{marginBottom: 5, fontWeight: '300'}}>
                  Rp.{formatprice(val.price)} X {val.qty}
                </Text>
                <Text style={{fontWeight: '600', color: '#f26d21'}}>
                  Rp.{formatprice(val.price * val.qty)}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text>Hapus</Text>
            </View>
          </View>
        );
      });
      // console.log(hasil);
      return hasil;
    } else {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Carts Kosong </Text>
          <Button
            title="lihat product"
            onPress={() => navigation.navigate('Products')}
          />
        </View>
      );
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Header>Cart</Header>
        {renderData()}
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        <View style={{marginRight: 'auto', justifyContent: 'center'}}>
          <Text style={{fontWeight: '700'}}>TOTAL</Text>
          <Text style={{fontWeight: '600', color: '#f26d21', fontSize: 18}}>
            Rp.{formatprice(total())}{' '}
          </Text>
        </View>
        <ButtonEl
          onPress={() => navigation.navigate('Checkout')}
          buttonStyle={{backgroundColor: 'green'}}
          title={'Checkout'}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapStateToProps)(CartScreen);

// import React, {useState} from 'react';
// import {
//   TextInput,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import NotifService from './../helpers/notifService';

// const Cart = () => {
//   const [registerToken, setregisterToken] = useState('');
//   const [fcmRegistered, setfcmRegistered] = useState(false);

//   const onRegister = token => {
//     console.log(token);
//     setfcmRegistered(true);
//     setregisterToken(token.token);
//   };

//   const onNotif = notif => {
//     // ini akan jalan kalo lagi foreground, pada saat remote notife jalan
//     console.log('di cart');
//     console.log('notif, difunc', notif);
//     Alert.alert(notif.title, notif.message);
//   };

//   const handlePerm = perms => {
//     Alert.alert('Permissions', JSON.stringify(perms));
//   };
//   const notif = new NotifService(onRegister, onNotif);

//   return (
//     <ScrollView>
//       <Text style={styles.title}>
//         Example app react-native-push-notification
//       </Text>
//       <View style={styles.spacer}></View>
//       <TextInput
//         style={styles.textField}
//         value={registerToken}
//         placeholderTextColor="black"
//         placeholder="Register token"
//       />
//       <View style={styles.spacer}></View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.localNotifbeda('kemana aja', 'dino');
//         }}>
//         <Text>Local Notification baru</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.localNotif();
//         }}>
//         <Text>Local Notification (now)</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.localNotif('sample.mp3');
//         }}>
//         <Text>Local Notification with sound (now)</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.scheduleNotif();
//         }}>
//         <Text>Schedule Notification in 30s</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.scheduleNotif('sample.mp3');
//         }}>
//         <Text>Schedule Notification with sound in 30s</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.cancelNotif();
//         }}>
//         <Text>Cancel last notification (if any)</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.cancelAll();
//         }}>
//         <Text>Cancel all notifications</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.checkPermission(handlePerm);
//         }}>
//         <Text>Check Permission</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.requestPermissions();
//         }}>
//         <Text>Request Permissions</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.abandonPermissions();
//         }}>
//         <Text>Abandon Permissions</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.getScheduledLocalNotifications(notifs => console.log(notifs));
//         }}>
//         <Text>Console.Log Scheduled Local Notifications</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.getDeliveredNotifications(notifs => console.log(notifs));
//         }}>
//         <Text>Console.Log Delivered Notifications</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.createOrUpdateChannel();
//         }}>
//         <Text>Create or update a channel</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.popInitialNotification();
//         }}>
//         <Text>popInitialNotification</Text>
//       </TouchableOpacity>

//       <View style={styles.spacer}></View>

//       {fcmRegistered && <Text>FCM Configured !</Text>}

//       <View style={styles.spacer}></View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: '#000000',
//     margin: 5,
//     padding: 5,
//     width: '70%',
//     backgroundColor: '#DDDDDD',
//     borderRadius: 5,
//   },
//   textField: {
//     borderWidth: 1,
//     borderColor: '#AAAAAA',
//     color: 'black',
//     margin: 5,
//     padding: 5,
//     width: '70%',
//   },
//   spacer: {
//     height: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });

// export default Cart;
