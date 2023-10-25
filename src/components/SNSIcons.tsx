import React from 'react';
import {View, Image} from 'react-native';
import {snsIconData} from '../utils';

type SNSIconsProps = {};

const SNSIcons: React.FC<SNSIconsProps> = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 10,
          justifyContent: 'flex-end',
        }}>
        {snsIconData.map(item => {
          return (
            <Image source={item.imageUrl} style={{width: 25, height: 25}} />
          );
        })}
      </View>
    </>
  );
};

export default SNSIcons;
