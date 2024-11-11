import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); 

const MainLayout = () => {
  
  const [fontsLoaded, error] = useFonts({
    "Radley_Regular": require("../assets/fonts/Radley-Regular.ttf"),
    "Radley_Italic": require("../assets/fonts/Radley-Italic.ttf"),
    
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync(); 
    }
  }, [fontsLoaded, error]);

  
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Slot /> 
    </Stack>
  );
};

export default MainLayout;