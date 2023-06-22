import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContext from './AppContext';
import Profile from './Profile';
import Age from './Age';
import BMI from './BMI';


function ProfileScreen() {
  return (
    <Profile/>
  );
}

function AgeScreen() {
    return (
        <Age/>
    );
}

function BMIScreen() {
  return (
    <BMI/>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  const data = {name:"jake", age: 0, weight: 0, height: 0}

  return (
    <AppContext value={data}>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Age" component={AgeScreen} />
          <Tab.Screen name="BMI" component={BMIScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext>
  );
}


export default App;