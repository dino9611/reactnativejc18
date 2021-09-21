import React, {useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  RefreshControl,
  FlatList,
  StyleSheet,
} from 'react-native';
import Atas from './../components/atas';
import Feed from './../components/feed';

const Home = ({navigation}) => {
  const {mainContainer} = styles;
  const [isDarkmode, setDarkMode] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const backgroundColors = isDarkmode ? '#111111' : 'white';
  const warnaText = isDarkmode ? 'white' : 'black';

  return (
    <>
      <StatusBar
        backgroundColor={backgroundColors}
        barStyle={isDarkmode ? 'light-content' : 'dark-content'}
      />
      <View style={[mainContainer, {backgroundColor: backgroundColors}]}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            ListHeaderComponent={
              <Atas
                isDarkmode={isDarkmode}
                setDarkMode={setDarkMode}
                navigation={navigation}
              />
            }
            data={[
              {id: 1, name: 'gangssar'},
              {id: 2, name: 'kevin'},
              {id: 3, name: 'maulana'},
              {id: 4, name: 'govar'},
            ]}
            renderItem={({item}) => (
              <Feed
                data={item}
                isDarkmode={isDarkmode}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                colors={[warnaText]}
                refreshing={refresh}
                progressBackgroundColor={backgroundColors}
                onRefresh={() => console.log('tes')} //axios get data lagi sepeti di didmount
              />
            }
          />
          {/* <View>
            <Text>Navigator</Text>
          </View> */}
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'white',
    // backgroundColor: '#111111',

    // height: '100%',
    flex: 1,
    // paddingVertical: 10,
  },
});
export default Home;
