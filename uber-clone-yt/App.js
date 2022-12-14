import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {store} from './store';


//1.) Setup redux

export default function App() {
  return (
    <Provider store={store}>
     
      <HomeScreen />
   
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
