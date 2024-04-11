import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        backgroundColor: '#E4ABF9',
        minHeight: screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/signup-success/signup-success-image.png')}
          style={{ marginBottom: 20 }}
        />
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          Your account has been successfully created!
        </Text>
      </View>
      <View style={{ position: 'absolute', bottom: 50 }}>
        <Link href={'/'} asChild>
          <TouchableOpacity
            style={{
              backgroundColor: '#6ECC92',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Index;
