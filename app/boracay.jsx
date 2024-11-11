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
          source={{ uri: 'https://boracayresortblog.wordpress.com/wp-content/uploads/2016/12/3nigi_nu_noos-boracay.jpg?w=640' }} // Replace with actual image URI
          style={styles.mainImage}
        />

        
        <View style={styles.contentSection}>
          <Text style={styles.placeName}>Boracay</Text>
          <Text style={styles.bio}>Welcome to Boracay: Your Tropical Paradise Awaits!</Text>

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
              source={{ uri: 'https://i.pinimg.com/564x/13/d4/2a/13d42a964dd3065f35d3305f09932047.jpg' }} 
              style={styles.galleryImage}
            />
            <Image
              source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipNiSuDPcy4OTVLG3KpwOcx9en1nR-GTjQSMfECQ=w594-h343-n-k-no' }} 
              style={styles.galleryImage}
            />
            <Image
              source={{ uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS3NtYdLg-L7fFGu4-Xk64fxfKDlbPMqmnHdN2K5B_GOIoV7W4CB8L7OBsRkW2DpoUxeRiXlEkJpPDZi6-KpniGkjLotTHZV75WgG_w_g' }} 
              style={styles.galleryImage}
            />
          </View>

         
          <Text style={styles.description}>
          Discover Boracay, where powdery white sands meet crystal-clear waters. This stunning island is famous for its vibrant nightlife, thrilling water sports, and breathtaking sunsets. Whether you seek adventure or relaxation, Boracay offers endless experiences. Come and see why this Philippine gem is the ultimate getaway!
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
    fontSize: 13,
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
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
    textAlign:'justify',
    fontFamily:'Radley_Regular',
  },
});
