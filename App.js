import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Block, Text} from 'expo-ui-kit';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
    {/* <Block secondary center middle>
      <Text primary>Drawer Transition App</Text>
      <Text bold>react-navigation V5</Text>
    </Block> */}
    </NavigationContainer>
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
