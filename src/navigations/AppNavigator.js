// Import necessary dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens/components
import HomeScreen from '../components/HomeScreen'; // Import your HomeScreen component
import AddInventoryScreen from '../components/InventoryAdd'; // Import the Add Inventory screen
import InventoryListScreen from '../components/InventoryList'; // Import the Inventory List screen
import Login from '../components/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inventory Management' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Inventory Management' }} />
        <Stack.Screen name="AddInventory" component={AddInventoryScreen} options={{ title: 'Add Inventory' }} />
        <Stack.Screen name="InventoryList" component={InventoryListScreen} options={{ title: 'Inventory List' }} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
