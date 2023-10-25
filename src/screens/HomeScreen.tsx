import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import LicenseCard from '../components/LicenseCard';
import {FAB} from 'react-native-elements';
import {data} from '../utils';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Home Screen</Text>
      <ScrollView style={{height: '100%'}}>
        {/* 資格詳細 */}
        {data.map(item => {
          return (
            <LicenseCard
              name={item.name}
              getDate={item.getDate}
              updateDate={item.updateDate}
              imageUrl={item.imageUrl}
              detail={item.detail}
              level={item.level}
            />
          );
        })}
      </ScrollView>
      {/* 新規追加ボタン */}
      <FAB
        icon={{name: 'add', color: 'black'}}
        type="solid"
        placement="right"
        color="lavender"
        size="large"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
