import React from 'react';

import {Avatar} from 'native-base';

const AvatarGroup = () => {
  return (
    <Avatar.Group size={'xs'} max={2}>
      <Avatar
        key={1}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
        }}>
        SS
      </Avatar>
      <Avatar
        key={2}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}>
        AK
      </Avatar>
      <Avatar
        key={3}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}>
        RS
      </Avatar>
      <Avatar
        key={4}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}>
        MR
      </Avatar>
      <Avatar
        key={5}
        source={{
          uri: 'https://bit.ly/code-beast',
        }}>
        CB
      </Avatar>
    </Avatar.Group>
  );
};

export default AvatarGroup;
