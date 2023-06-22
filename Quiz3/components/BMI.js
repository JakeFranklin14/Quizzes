import React from 'react';
import {Pressable, Text, Alert, StyleSheet, View } from 'react-native';
import {useValue} from './AppContext';

const BMI = () => {
  const {currentValue} = useValue();
    return (
    <View style={styles.container}> 
      <Text> BMI Calculator </Text>
      <Text> height: {currentValue.height}</Text>
      <Text> weight: {currentValue.weight}</Text>
      <Text> BMI: {703 * (currentValue.weight / (currentValue.height * currentValue.height))}</Text>


    </View>
    );
};

export default BMI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  });