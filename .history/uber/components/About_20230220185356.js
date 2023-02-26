import { View, Text , Image} from 'react-native'
import React from 'react'

const image = "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
const title = 'Farmhouse Kitchen Thai Cusine';
const description = "Thai • Comfort Food • $$ • 🎫 • 4⭐(3215+)";


export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
  
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );

  const RestaurantName = (props) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );