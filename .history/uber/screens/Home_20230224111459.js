import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from "react";
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItmes, { localRestaurants } from '../components/RestaurantItmes';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/BottomTabs';

const YELP_API_KEY =
 "MNgexRadbnjJjYkj0dR9p4vS7nFk_HcYSivC0XFaIL5PeRQ8KNAjdbBsRUGJD3iDZeU1haCFvOokfk961R_H3sZkDXa3bDn5nvgNDoARjmArasX0PR5LzmJhBHPsY3Yx"


export default function Home({ navigation }) {
  const [restaurantData,setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery")
  const getRestaurantsFromYelp= () =>{
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;  

     const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) =>
      setRestaurantData(
        json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        )
      )
    );
};

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city,activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
       <View style={{backgroundColor: "white", padding: 15}}>
       <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
       <SearchBar cityHandler={setCity} />
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
       <Categories/>
       <RestaurantItmes
        restaurantData={restaurantData} 
        navigation={navigation}/>
       </ScrollView>
       <Divider width={1}/>
       <BottomTabs/>
    </SafeAreaView>
      
    
  )
}