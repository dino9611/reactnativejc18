import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from './header';
import Stories from './stories';

const Atas = ({...rest}) => {
  // {...rest} = {isDarkmode,setdarkmode,navigation}
  const {storyContainer} = styles;

  return (
    <>
      <Header {...rest} />
      {/* header atas dan bawah sama saja cuman atas lebih pendek kodingnya */}
      {/* <Header isDarkmode={isDarkmode}
                setDarkMode={setDarkMode}
                navigation={navigation}/> */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={storyContainer}>
        <Stories key={1} {...rest} />
        <Stories key={2} {...rest} />
        <Stories key={3} {...rest} />
        <Stories key={4} {...rest} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    marginLeft: 5,
  },
});

export default Atas;
