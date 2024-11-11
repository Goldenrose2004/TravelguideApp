import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

const recommendations = [
  {
    id: '1',
    name: 'Boracay',
    location: 'Malay, Aklan',
    rating: 9.7,   
    category: 'Beach',
    imageUrl: 'https://boracayresortblog.wordpress.com/wp-content/uploads/2016/12/3nigi_nu_noos-boracay.jpg?w=640', 
    screen: 'boracay',
  },
  {
    id: '2',
    name: 'El Nido',
    location: 'Palawan',
    rating: 6.7,
    category: 'Beach',
    imageUrl: 'https://i.pinimg.com/564x/13/93/d4/1393d436d71b3bfb4f6eea6532787c77.jpg', 
    screen: 'Elnido',
  },
];

const destinations = [
  {
    id: '1',
    name: 'Tagaytay',
    location: 'Philippines',
    category: 'Mountains',
    rating: 6.2,
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMx0C26TDZCCRWQz2I4ox1Mpmau57p0MSTOXfAm=w148-h148-n-k-no',
    screen: 'Tagaytay',
  },
  {
    id: '2',
    name: 'Kawasan Falls',
    location: 'Alegria, Cebu',
    category: 'Beach',
    rating: 4.5,
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMIFCDaRkN_gE70rw2JOJgVKvMw_dzMnVj7MJnY=w148-h148-n-k-no',
    screen: 'KawasanFalls',
  },
  {
    id: '3',
    name: 'Chocolate Hills',
    location: 'Bohol',
    category: 'Mountains',
    rating: 4.2,
    imageUrl: 'https://i.pinimg.com/736x/ba/5f/c4/ba5fc44946ae8a033ebe29aec78847a1.jpg',
    screen: 'ChocolateHills',
  },
  {
    id: '4',
    name: 'Burnham',
    location: 'Baguio',
    category: 'Camp',
    rating: 4.1,
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPhORGRmvQ37HN9K0LV-q49TrhS56f1-23GbwU=s294-w294-h220-k-no',
    screen: 'Burnham',
  },
  {
    id: '5',
    name: 'Intramuros',
    location: 'Manila',
    category: 'Museum',
    rating: 4.0,
    imageUrl: 'https://i.pinimg.com/564x/10/5c/90/105c90ae418a636566f8d4fcb73148f9.jpg',
    screen: 'Intramuros',
  },
  {
    id: '6',
    name: 'Siargo Island',
    location: 'Surigao del Norte',
    category: 'Beach',
    rating: 4.5,
    imageUrl: 'https://i.pinimg.com/564x/5b/ce/41/5bce41ab96aca8c8ad88110b3dbfe08b.jpg',
    screen: 'SiargoIsland',
  },
  {
    id: '7',
    name: 'National Museum of Fine Arts',
    location: 'Manila',
    category: 'Museum',
    rating: 4.7,
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNTgQtyc69wfG8eAYEpwph0mpn6yUSC2cv_NrO7=s294-w294-h220-k-no',
    screen: 'Museum',
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const filteredDestinations = selectedCategory === 'All'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  const searchedDestinations = filteredDestinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'Radley_Regular', fontSize: 25}}>Welcome April!</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search destinations..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <Text style={{fontFamily:'Radley_Regular', fontSize: 21}}>Categories</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => setSelectedCategory('All')}>
          <Text style={selectedCategory === 'All' ? styles.categorySelected : styles.categoryUnselected}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Beach')}>
          <Text style={selectedCategory === 'Beach' ? styles.categorySelected : styles.categoryUnselected}>Beach</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Camp')}>
          <Text style={selectedCategory === 'Camp' ? styles.categorySelected : styles.categoryUnselected}>Camp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Museum')}>
          <Text style={selectedCategory === 'Museum' ? styles.categorySelected : styles.categoryUnselected}>Museum</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Mountains')}>
          <Text style={selectedCategory === 'Mountains' ? styles.categorySelected : styles.categoryUnselected}>Mountains</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontFamily:'Radley_Regular', fontSize: 21}}>Recommendations</Text>
      <View style={styles.recommendationContainer}>
        <FlatList horizontal data={recommendations} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationCard}
            onPress={() => navigation.navigate(item.screen)}  // Navigate to the respective screen
          >
            <View style={styles.recommendationCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.recommendationImage} />
              <View style={styles.recommendationInfo}>
                <Text style={styles.recommendationName}>{item.name}</Text>
                <Text style={styles.recommendationLocation}>{item.location}</Text>
                <Text style={styles.recommendationRating}>⭐ {item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent} 
        />
      </View>

      <Text style={{fontFamily:'Radley_Regular', fontSize: 21}}>Top Destinations</Text>
      <FlatList
        data={searchedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.destinationCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.destinationImage} />
            <View style={styles.destinationInfo}>
              <Text style={styles.destinationName}>{item.name}</Text>
              <Text style={styles.destinationLocation}>{item.location}</Text>
              <Text style={styles.destinationRating}>⭐ {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  searchInput: {
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  recommendationContainer: {
    alignItems: 'flex-start', 
  },

  flatListContent: {
    alignItems: 'center', 
  },
  recommendationCard: {
    flexDirection: 'row',
    padding: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 1,
    width: 200,
   
  },
  recommendationImage: {
    width: 85,
    height: 75,
    borderRadius: 8,
    marginRight: 12,

  },
  recommendationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  recommendationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendationLocation: {
    fontSize: 14,
    color: '#666',
  },
  recommendationRating: {
    fontSize: 14,
    color: '#333',
  },
 
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categorySelected: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 15,
  },
  categoryUnselected: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 9,
    backgroundColor: '#e7e7e7',
    color: '#333',
    borderRadius: 15,
  },
  
  destinationCard: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 1,
  },
  destinationImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  destinationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  destinationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  destinationLocation: {
    fontSize: 14,
    color: '#666',
  },
  destinationRating: {
    fontSize: 14,
    color: '#333',
  },
});

export default HomeScreen;
