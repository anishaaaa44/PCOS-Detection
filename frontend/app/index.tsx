import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href='/signup-success'>
        <Text>Go to welcome</Text>
      </Link>
    </View>
  );
};

export default index;
