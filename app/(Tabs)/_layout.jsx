import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }} 
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.home} 
          color={color} />,
        }}
      />
      <Tabs.Screen
    name="heart"
    options={{
      title: 'Favorites',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.heart}
          color={color}
          name="heart"
          focused={focused}
        />
      ),
    }}
  />
      <Tabs.Screen
        name="notif"
        options={{
          title: 'Notification',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.notif} 
          color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.profile} 
          color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
