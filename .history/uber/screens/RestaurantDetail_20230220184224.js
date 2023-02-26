import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/About';
import { Divider } from 'react-native-elements';

export default function RestaurantDetail() {
  return (
    <View>
      <About/>
      <Divider width={1.8} style={{marginVertical}}
    </View>
  )
}