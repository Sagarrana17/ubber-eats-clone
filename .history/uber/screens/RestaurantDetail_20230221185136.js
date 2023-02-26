import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/MenuItems';

export default function RestaurantDetail() {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItems/>
    </View>
  )
}