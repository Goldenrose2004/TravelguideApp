// import { View, Text } from 'react-native'
// import React from 'react'

// const Notif = () => {
//   return (
//     <View>
//       <Text>Notification</Text>
//     </View>
//   )
// }

// export default Notif

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';


const notifications = [
  {
    id: '1',
    user:  'Welcome to Travel Guide App! 🌍✈️',
    message: "Hello, Traveler! We're excited to have you join our community. Your adventure awaits! Get ready to explore new places, find great tips, and plan your next adventure. Let’s start your journey together—happy travels!",
    time: '1 hour ago',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocLPbq2CBn_-A3alV9rtcPTkOfwijK40aZGFILWcSYxnQfLUHhWpdA=s83-c-mo', 
  },
  {
    id: '2',
    user: 'App Update: New Features & Content!🚀',
    message: " We’ve just released an update! Enjoy improved performance, new travel tips, and fresh destinations to explore. Plus, thanks for your ratings—they help us get better! Dive in and check out what’s new!",
    time: 'just now',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocLPbq2CBn_-A3alV9rtcPTkOfwijK40aZGFILWcSYxnQfLUHhWpdA=s83-c-mo',
  },
  
];


const NotificationItem = ({ item }) => {
  return (
    <View style={styles.notificationItem}>
      <Image source={{ uri: item.url }} style={styles.url} />
      <View style={styles.notificationContent}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.message}>{item.message}</Text>
        {item.details && <Text style={styles.details}>{item.details}</Text>}
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};


const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Text style={styles.header}>Notifications</Text>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  url: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationContent: {
    marginLeft: 15,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
  details: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
});

export default NotificationScreen;

