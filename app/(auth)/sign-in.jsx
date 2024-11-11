import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Image } from 'react-native';
import { Link, useRouter } from 'expo-router'; 
import { images } from '../../constants';
import icons from '../../constants/icons'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); 

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('/home'); 
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/23/77/40/237740f34eb7057e251d15d657f4a508.jpg' }}
      style={styles.background}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Image 
              source={images.textlogo}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.title}>Log in to Travel Guide</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Email / Username"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#ccc"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                <Image 
                  source={showPassword ? icons.eye : icons.hide_eye} 
                  style={[styles.eyeIcon, { tintColor: '#ffffff' }]}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Sign in</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>
              Don’t have an Account?{' '}
              <Link href="/sign-up" style={styles.signupLink}>Sign up</Link>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: -250,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#000', 
    color: '#fff',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#000', 
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: '#fff',
  },
  eyeButton: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  eyeIcon: {
    width: 20,  
    height: 20,
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupText: {
    color: '#fff',
    textAlign: 'center',
  },
  signupLink: {
    color: '#1e90ff',
  },
});

export default SignIn;
