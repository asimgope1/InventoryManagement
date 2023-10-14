import React from 'react';
import { View, Text, Button, StyleSheet,Pressable } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ username, logout }) => {

    const navigation = useNavigation();


    const handleLogout = () => {
        // Dispatch the logout action
        logout();
    
        // Navigate to the login screen
        navigation.navigate('Login'); // Replace 'Login' with the name of your login screen.
      };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Button title="Logout" onPress={handleLogout} /> 

      <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row'

      }}
      >
      <Pressable
      onPress={()=>{
        navigation.navigate('AddInventory'); // Replace 'Login' with the name of your login screen.
      }}
      style={{
        backgroundColor:'blue',
        padding:10,
        borderRadius:8,
        margin:10
    
      }}
      >
        <Text
        style={{
            color:'white',
            fontSize:20
            
        }}
        >
            Add Inventory
        </Text>

      </Pressable>
      <Pressable
      onPress={()=>{
        navigation.navigate('InventoryList'); // Replace 'Login' with the name of your login screen.
      }}
      style={{
        backgroundColor:'green',
        padding:10,
        borderRadius:8,
        margin:10
    
      }}
      >
        <Text
        style={{
            color:'white',
            fontSize:20
            
        }}
        >
            View Inventory
        </Text>

      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
    return {
      username: state.auth.user ? state.auth.user.username : null,
    };
  };
  

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
