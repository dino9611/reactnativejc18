import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import NotifService from './../helpers/notifService';

const Cart = () => {
  const [registerToken, setregisterToken] = useState('');
  const [fcmRegistered, setfcmRegistered] = useState(false);

  const onRegister = token => {
    console.log(token);
    setfcmRegistered(true);
    setregisterToken(token.token);
  };

  const onNotif = notif => {
    // ini akan jalan kalo lagi foreground, pada saat remote notife jalan
    console.log('di cart');
    console.log('notif, difunc', notif);
    Alert.alert(notif.title, notif.message);
  };

  const handlePerm = perms => {
    Alert.alert('Permissions', JSON.stringify(perms));
  };
  const notif = new NotifService(onRegister, onNotif);

  return (
    <ScrollView>
      <Text style={styles.title}>
        Example app react-native-push-notification
      </Text>
      <View style={styles.spacer}></View>
      <TextInput
        style={styles.textField}
        value={registerToken}
        placeholderTextColor="black"
        placeholder="Register token"
      />
      <View style={styles.spacer}></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.localNotifbeda('kemana aja', 'dino');
        }}>
        <Text>Local Notification baru</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.localNotif();
        }}>
        <Text>Local Notification (now)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.localNotif('sample.mp3');
        }}>
        <Text>Local Notification with sound (now)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.scheduleNotif();
        }}>
        <Text>Schedule Notification in 30s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.scheduleNotif('sample.mp3');
        }}>
        <Text>Schedule Notification with sound in 30s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.cancelNotif();
        }}>
        <Text>Cancel last notification (if any)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.cancelAll();
        }}>
        <Text>Cancel all notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.checkPermission(handlePerm);
        }}>
        <Text>Check Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.requestPermissions();
        }}>
        <Text>Request Permissions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.abandonPermissions();
        }}>
        <Text>Abandon Permissions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.getScheduledLocalNotifications(notifs => console.log(notifs));
        }}>
        <Text>Console.Log Scheduled Local Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.getDeliveredNotifications(notifs => console.log(notifs));
        }}>
        <Text>Console.Log Delivered Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.createOrUpdateChannel();
        }}>
        <Text>Create or update a channel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notif.popInitialNotification();
        }}>
        <Text>popInitialNotification</Text>
      </TouchableOpacity>

      <View style={styles.spacer}></View>

      {fcmRegistered && <Text>FCM Configured !</Text>}

      <View style={styles.spacer}></View>
    </ScrollView>
  );
};

export default Cart;

// export default class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//     this.notif = new NotifService(
//       this.onRegister.bind(this),
//       this.onNotif.bind(this),
//     );
//   }

//   render() {
//     return (
//       <ScrollView>
//         <Text style={styles.title}>
//           Example app react-native-push-notification
//         </Text>
//         <View style={styles.spacer}></View>
//         <TextInput
//           style={styles.textField}
//           value={this.state.registerToken}
//           placeholder="Register token"
//         />
//         <View style={styles.spacer}></View>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.localNotif();
//           }}>
//           <Text>Local Notification (now)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.localNotif('sample.mp3');
//           }}>
//           <Text>Local Notification with sound (now)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.scheduleNotif();
//           }}>
//           <Text>Schedule Notification in 30s</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.scheduleNotif('sample.mp3');
//           }}>
//           <Text>Schedule Notification with sound in 30s</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.cancelNotif();
//           }}>
//           <Text>Cancel last notification (if any)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.cancelAll();
//           }}>
//           <Text>Cancel all notifications</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.checkPermission(this.handlePerm.bind(this));
//           }}>
//           <Text>Check Permission</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.requestPermissions();
//           }}>
//           <Text>Request Permissions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.abandonPermissions();
//           }}>
//           <Text>Abandon Permissions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.getScheduledLocalNotifications(notifs =>
//               console.log(notifs),
//             );
//           }}>
//           <Text>Console.Log Scheduled Local Notifications</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.getDeliveredNotifications(notifs => console.log(notifs));
//           }}>
//           <Text>Console.Log Delivered Notifications</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.createOrUpdateChannel();
//           }}>
//           <Text>Create or update a channel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.notif.popInitialNotification();
//           }}>
//           <Text>popInitialNotification</Text>
//         </TouchableOpacity>

//         <View style={styles.spacer}></View>

//         {this.state.fcmRegistered && <Text>FCM Configured !</Text>}

//         <View style={styles.spacer}></View>
//       </ScrollView>
//     );
//   }

//   onRegister(token) {
//     console.log(token);
//     this.setState({registerToken: token.token, fcmRegistered: true});
//   }

//   onNotif(notif) {
//     console.log('di cart');
//     console.log('notif, difunc', notif);
//     Alert.alert(notif.title, notif.message);
//   }

//   handlePerm(perms) {
//     Alert.alert('Permissions', JSON.stringify(perms));
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    color: 'black',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

// import React, {useEffect, useState} from 'react';
// import {View, Text, Button} from 'react-native';
// import {connect} from 'react-redux';
// function CartScreen({navigation, route}) {
//   const [angka, setangka] = useState(1);

//   useEffect(() => {
//     console.log('cart didmount');

//     return () => {
//       console.log('cart product');
//     };
//   }, []);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Carts Screen {angka}</Text>
//       <Button title="tambah" onPress={() => setangka(angka + 1)} />
//     </View>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     Auth: state.Auth,
//   };
// };

// export default connect(mapStateToProps)(CartScreen);
