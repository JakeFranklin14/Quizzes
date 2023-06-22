import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import {useValue} from './AppContext';

const Profile = () => {

  const {currentValue,setCurrentValue} = useValue();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

    return (
            <View style={styles.container}>
                <Text> currentValue = {'{"name":"'}{currentValue.name}{'","age":"'}{currentValue.age}{'","weight":'}{currentValue.weight}{',"height":'}{currentValue.height}{'}'} </Text>
                <Text> </Text>
                <View style={styles.inputs}>
                  <Text> name </Text>
                  <TextInput 
                    style={{ backgroundColor: 'lightgreen'}}
                    onChangeText={text => setName(text)}
                    value={name}
                  />
                  <Text> </Text>
                  <Text> </Text>
                </View>
                <Text> </Text>
                  <View style={styles.inputs}>
                  <Text> age </Text>
                  <TextInput 
                    style={{ backgroundColor: 'lightblue'}}
                    onChangeText={text => setAge(text)}
                    value={age}
                  />
                  <Text> </Text>
                  <Text> </Text>
                  </View>
                <Text> </Text>
                  <View style={styles.inputs}>
                  <Text> weight </Text>
                  <TextInput 
                    style={{ backgroundColor: 'pink'}}
                    onChangeText={text => setWeight(text)}
                    value={weight}
                  />
                  <Text> </Text>
                  <Text> </Text>
                  </View>
                  <Text> </Text>
                  <View style={styles.inputs}>
                  <Text> height </Text>
                  <TextInput 
                    style={{ backgroundColor: 'aqua'}}
                    onChangeText={text => setHeight(text)}
                    value={height}
                  />
                  <Text> </Text>
                  <Text> </Text>
                  </View>
                  <Text> </Text>
                  <Button
                    title="SAVE PROFILE"
                    onPress={() => setCurrentValue({ name: name, age: age, weight: weight, height: height})}
                  />
            </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 16,
      color: 'white',
    },
    inputs: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });