import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { useSelector } from "react-redux";

export default function ViewCart() {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [loading, setLoading] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });

    console.log(to)
  {
    return (
      <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 150,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20}}>View Cart </Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}