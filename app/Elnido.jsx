import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [rating, setRating] = useState(6.7);

  const handleRatingPress = (value) => {
    setRating(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
       
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/13/93/d4/1393d436d71b3bfb4f6eea6532787c77.jpg' }} 
          style={styles.mainImage}
        />

        
        <View style={styles.contentSection}>
          <Text style={styles.placeName}>El Nido</Text>
          <Text style={styles.bio}> El Nido: Nature's Masterpiece Awaits!</Text>

          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <TouchableOpacity key={index} onPress={() => handleRatingPress(star)}>
                <Text style={styles.star}>⭐</Text>
              </TouchableOpacity>
            ))}

            <Text style={styles.ratingScore}>{rating.toFixed(1)}</Text>
          </View>

          <View style={styles.gallery}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/bc/0a/b7/bc0ab79d8168514c6e06f9bc585bdc3e.jpg' }} 
              style={styles.galleryImage}
            />
            <Image
              source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipPfF1b7CxGP_9elP-D65S6mQozzx_YoXupeyKyG=w594-h343-n-k-no' }} 
              style={styles.galleryImage}
            />
            <Image
              source={{ uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSPY_Oq1a2HkL2t76wwAg_NCBCzbcJDLoNwbXlVIzRDra38j8hGEgqv7uvUxEHpNLnL4mRGybDDuL7uYJh-CAF4pv8u_ij7JJ050w907g' }} 
              style={styles.galleryImage}
            />
          </View>

         
          <Text style={styles.description}>
          Discover El Nido, a stunning Philippine paradise with dramatic limestone cliffs, crystal-clear lagoons, and vibrant coral reefs. Enjoy island-hopping adventures, hidden beaches, and diverse marine life. Whether you seek adventure or relaxation, El Nido promises unforgettable experiences in a tropical haven!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  card: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: 260,
  },
  contentSection: {
    padding: 15,
  },
  placeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  star: {
    fontSize: 20,
    color: 'gold',
    marginRight: 5,
  },
  ratingScore: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  galleryImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    textAlign:'justify',
    fontFamily:'Radley_Regular',
  },
});
