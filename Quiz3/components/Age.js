import React from 'react';
import {Pressable, Text, Alert, StyleSheet, View } from 'react-native';
import {useValue} from './AppContext';

const Age = () => {
  const {currentValue} = useValue();
    return (
    <View style={styles.container}> 
      <Text> Age Calculator </Text>
      <Text> age in years: {currentValue.age}</Text>
      <Text> age in weeks: {currentValue.age * 52}</Text>
      <Text> age in days: {currentValue.age * 365.25}</Text>


    </View>
    );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  });