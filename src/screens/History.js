import React, {useState} from 'react';
import {View, Text, Button, Image, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
const History = () => {
  const [gambar, setImage] = useState(null);

  const openCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      console.log(image);
      setImage(image);
    });
  };

  const uploadFoto = async () => {
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Client-ID 8197e6e8880298b',
      },
    };
    const data = new FormData();
    // ngebuat data image
    const img = {
      uri: gambar.path,
      type: 'image/jpeg',
      name: 'photo.jpg',
    };
    // file dikirimkan
    data.append('image', img);
    const res = await axios.post(
      `https://api.imgur.com/3/image`,
      data,
      options,
    );
    console.log(res.data.data.link);
    alert('berhasil');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="camera" onPress={openCamera} />
      {gambar ? (
        <Image
          source={{uri: gambar.path}}
          style={{
            height: 500,
            width: '100%',
          }}
        />
      ) : null}
      <Button title="upload foto" onPress={uploadFoto} />
    </View>
  );
};

export default History;
