import { View, Text , Image} from 'react-native'
import React from 'react'


const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
  "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  price: "$$",
  review: "1500",
  rating: 4.5,
  categories: [{title: "Thai"}, {title: "Comfort Food"}],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");


//const image = "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
const title = 'Farmhouse Kitchen Thai Cusine';
const description = "Thai • Comfort Food • $$ • 🎫 • 4⭐(3215+)";


export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={title} />
      <RestaurantDescription description={description} />
  
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

  const RestaurantDescription = (props) => (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Text>
  );