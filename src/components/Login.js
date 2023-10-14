import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ login, isAuthenticated, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
        
      navigation.navigate('Home');
    }
  }, [isAuthenticated, navigation]);

  const handleLogin = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem('loggedInUser', JSON.stringify({ username, password }));
        await login({ username, password });
      } catch (error) {
        console.error('Login failed', error);
        Alert.alert('Login failed. Please try again.');
      }
    } else {
      Alert.alert('Please provide both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'grey'}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'grey'}

        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {isAuthenticated ? (
        <Text style={styles.successMessage}>Login Successful!</Text>
      ) : (
        <Text style={styles.failMessage}>Login Unsuccessful!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    color:'grey',
  
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  successMessage: {
    color: 'green',
    marginTop: 20,
  },
  failMessage: {
    color: 'red',
    marginTop: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
