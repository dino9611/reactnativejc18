import React from 'react';

import {Text} from 'react-native';

const H1 = ({children, size}) => {
  // let {children,size} = props
  return (
    <Text
      style={{color: 'white', fontSize: size ? size : 23, fontWeight: 'bold'}}>
      {children}
    </Text>
  );
};

export default H1;
