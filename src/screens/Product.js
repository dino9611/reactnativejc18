import axios from 'axios';
import {axiosInstance} from '../helpers/axiosInstance';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {API_URL} from '../helpers';

function ProductScreen({navigation, route}) {
  const [products, setproducts] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [limit, setlimit] = useState(7);

  const fetchData = async () => {
    try {
      const {data} = await axiosInstance.get(`/products?_limit=${limit}`);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const RefreshHandler = async () => {
    await setrefresh(true);
    await setlimit(6);
    const {data} = await axios.get(`${API_URL}/products?_limit=${limit}`);
    await setproducts(data);
    await setrefresh(false);
  };

  useEffect(() => {
    // console.log('products didmount');
    fetchData();

    return () => {
      console.log('unmount product');
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [limit]); //didupdate yang kterigger jika limit berubah

  const toDetailHandler = data => {
    navigation.navigate('DetailProd', {data: data}); //kirim param yaitu data product tersebut
  };

  const renderProducts = ({item, index}) => {
    return (
      <View style={{marginBottom: 10, marginHorizontal: 5, width: '45%'}}>
        <TouchableWithoutFeedback onPress={() => toDetailHandler(item)}>
          <View>
            <View style={{height: 200, width: '100%'}}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={{uri: item.image}}
              />
            </View>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        extraData={products}
        keyExtractor={val => val.id}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={RefreshHandler} //axios get data lagi sepeti di didmount
          />
        }
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          console.log('ujung');
          setlimit(limit + 4);
        }}
        onEndReachedThreshold={0.3}
        ListFooterComponent={<ActivityIndicator color="black" />}
      />
    </View>
  );
}

export default ProductScreen;
