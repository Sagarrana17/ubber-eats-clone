import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { useSelector } from "react-redux";

export default class ViewCart extends Component {
  const { items} = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  render() {
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