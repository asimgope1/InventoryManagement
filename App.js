import React ,{ useEffect}from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import store from './src/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from './src/actions/authActions';

export default function App() {
  const checkLoginStatus = async () => {
    try {
      const userString = await AsyncStorage.getItem('loggedInUser');
      if (userString) {
        const { username, password } = JSON.parse(userString);

        // Dispatch the login action with the saved username and password
        // This assumes you have a login action defined in your app
        login({ username, password });
        console.log(username,password)
      }
    } catch (error) {
      console.error('Error reading AsyncStorage:', error);
    }}

    useEffect(() => {
      checkLoginStatus();
    }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
