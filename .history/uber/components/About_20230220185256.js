import { View, Text } from 'react-native'
import React from 'react'

const image = "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
const title = 'Farmhouse Kitchen Thai Cusine';
const description = "Thai • Comfort Food • $$ • 🎫 • 4⭐(3215+)";


export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
     // <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );