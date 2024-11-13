import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "../constants"; 

const FormField = ({ 
  title, 
  value, 
  placeholder, 
  handleChangeText, 
  otherStyles = {}, 
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = title === "Password" || title === "Confirm Password";

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.inputContainer, isPasswordField && styles.passwordField]}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={isPasswordField && !showPassword}
          {...props}
        />
        {isPasswordField && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.hide_eye : icons.eye}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: "#FFFFFF", 
    fontFamily: "Radley_Regular",
    marginBottom: 8,
    textAlign: 'left', 
  },
  inputContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFFFFF", 
    flexDirection: "row",
    alignItems: "center",
  },
  passwordField: {
    borderColor: "#FFFFFF", 
  },
  input: {
    flex: 1,
    color: "#FFFFFF", 
    fontFamily: "Radley_Regular",
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF", 
  },
});

export default FormField;