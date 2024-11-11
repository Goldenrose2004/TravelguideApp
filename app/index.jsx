import { StyleSheet, Text, View, Image } from 'react-native'; 
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { ScrollView } from 'react-native';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/e5/a3/98/e5a398c4a20f1d438106048389201709.jpg' }} 
          style={styles.backgroundImage}
        />
        
        <View style={styles.logoContainer}>
          <Image 
            source={images.textlogo}
            style={styles.textLogo} 
          />
          <Image 
            source={images.logo}
            style={styles.logo} 
          />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText2}>
           An Interactive Guide to World Destinations with Traveler-Powered Insights
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Unlock your ideal Destination with Ease!
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Get Started"
            handlePress={() => router.push('/sign-in')}
            
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#1E1E2D', 
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    
  },
  textLogo: {
    width: 400,  
    height: 250,  
    resizeMode: 'contain', 
    marginBottom: -100, 
    marginTop: -90,
  },
  logo: {
    width: 250, 
    height: 200, 
    resizeMode: 'contain',
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    paddingHorizontal: 30, 
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Radley_Regular',
     
  },
  descriptionText2: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Radley_Regular',
    width: 300, 
    height: 250, 
 
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
   
  },
  customButton: {
    backgroundColor: '#FF5722', 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    
  },
});
