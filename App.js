import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, CardContent, CardImage, CardTitle } from "./src/components/Card";
import tw from "twrnc";

export default function App() {
  const [buttonColor, setButtonColor] = useState("bg-blue-500");
  const [backgroundColor, setBackgroundColor] = useState("bg-red-500");
  const [imageUrl, setImageUrl] = useState("https://source.unsplash.com/random");

  const handlePress = () => {
    const randomColor = getRandomColor();
    setButtonColor(`bg-${randomColor}-700`);
    setBackgroundColor(`bg-${randomColor}-500`);
    setImageUrl(`https://source.unsplash.com/random?t=${Date.now()}`);
  };

  function getRandomColor() {
    const colors = [
      "red", 
      "blue", 
      "green", 
      "yellow", 
      "indigo", 
      "purple", 
      "pink", 
      "teal", 
      "orange", 
      "lime", 
      "cyan", 
      "fuchsia", 
      "rose", 
      "amber", 
      "gray", 
      "true-gray"
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <View style={[styles.container, tw`${backgroundColor}`]}>
      <Card style={tw`w-full max-w-sm shadow`}>
        <CardContent style={tw`gap-1`}></CardContent>
        <CardTitle style={tw`text-white text-center mb-6`}>Juan Diego Mendoza Gutierrez</CardTitle>
        <CardImage source={{ uri: imageUrl }} />
        <CardContent style={tw`gap-1`}>
          <TouchableOpacity onPress={handlePress}>
            <Text
              style={[
                tw`font-bold items-center justify-center leading-10 rounded-2 h-10 text-center ${buttonColor}`,
                
                { color: "#fff" },
              ]}
            >
              Cambiar estilo
            </Text>
          </TouchableOpacity>
        </CardContent>
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
