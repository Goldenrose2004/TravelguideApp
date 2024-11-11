import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for the icons

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocLPbq2CBn_-A3alV9rtcPTkOfwijK40aZGFILWcSYxnQfLUHhWpdA=s83-c-mo' }} 
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>April Rose M. Ebrado</Text>
          <Text style={styles.profilebio}>"Always seeking new adventures and experiences around the world. Exploring cultures, food, and places one journey at a time."</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Settings</Text>

      <View style={styles.option}>
        <View style={styles.optionLabel}>
          <Ionicons name="moon-outline" size={24} color="#171614" />
          <Text style={styles.optionText}>Dark Mode</Text>
        </View>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLabel}>
          <Ionicons name="person-circle-outline" size={24} color="#171614" />
          <Text style={styles.optionText}>Manage User</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLabel}>
          <Ionicons name="download" size={24} color="#171614" />
          <Text style={styles.optionText}>App Updates</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLabel}>
          <Text style={styles.optionText}>Terms & Conditions</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#999" />
      </TouchableOpacity>



      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    padding: 20,
    backgroundColor: '#fff',
    
  },
  header: {
    flexDirection: 'column', 
    alignItems: 'center', 
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileTextContainer: {
    alignItems: 'center', 
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
  },
  profilebio: {
    textAlign: 'center',
    paddingHorizontal: 10, 
  },
  sectionHeader: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#f00',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%', 
  },
  signOutText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;