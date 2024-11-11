import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikesScreen = () => {
  const [likedItems, setLikedItems] = useState({});

  const items = [
    {
      id: 1,
      title: 'Boracay',
      description: 'Famous for white sand beaches and vibrant nightlife.',
      image: 'https://boracayresortblog.wordpress.com/wp-content/uploads/2016/12/3nigi_nu_noos-boracay.jpg?w=640',
      tasks: 14,
    },
    {
      id: 2,
      title: 'El Nido',
      description: 'Known for stunning cliffs, lagoons, and hidden beaches.',
      image: 'https://i.pinimg.com/564x/13/93/d4/1393d436d71b3bfb4f6eea6532787c77.jpg',
      tasks: 14,
    },
    {
      id: 3,
      title: 'Tagaytay',
      description: 'Scenic views of Taal Volcano and cooler climate.',
      image: 'https://lh5.googleusercontent.com/p/AF1QipMx0C26TDZCCRWQz2I4ox1Mpmau57p0MSTOXfAm=w148-h148-n-k-no',
      tasks: 14,
    },
  ];

  
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={{ fontFamily: 'Radley_Regular', fontSize: 19 }}>Favorites</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            
            <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.heartIcon}>
              <Icon
                name={likedItems[item.id] ? 'heart' : 'heart-o'}
                size={24}
                color={likedItems[item.id] ? 'red' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  tabContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    alignItems: 'center',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#000',
  },
  listContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
    marginTop: 5,
  },
  heartIcon: {
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LikesScreen;
