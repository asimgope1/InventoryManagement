import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addInventoryItem } from '../actions/inventoryActions';

const InventoryAdd = () => {
  const [productName, setProductName] = useState('');
  const [vendor, setVendor] = useState('');
  const [mrp, setMrp] = useState('');
  const [batchNum, setBatchNum] = useState('');
  const [batchDate, setBatchDate] = useState('');
  const [quantity, setQuantity] = useState('');

  const dispatch = useDispatch();

  const handleAddItem = () => {
    // Create a new inventory item object
    const newItem = {
      productName,
      vendor,
      mrp,
      batchNum,
      batchDate,
      quantity,
      status: 'Pending',
    };

    // Dispatch an action to add the new inventory item
    dispatch(addInventoryItem(newItem));

    // Show an alert when the item is added successfully
    Alert.alert('Success', 'Inventory item added successfully.', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'), // You can customize this action
      },
    ]);

    // Clear the input fields
    setProductName('');
    setVendor('');
    setMrp('');
    setBatchNum('');
    setBatchDate('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Inventory Item</Text>
      
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}

        placeholder="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}

        placeholder="Vendor"
        value={vendor}
        onChangeText={(text) => setVendor(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}

        placeholder="MRP"
        value={mrp}
        onChangeText={(text) => setMrp(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}

        placeholder="Batch Number"
        value={batchNum}
        onChangeText={(text) => setBatchNum(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}

        placeholder="Batch Date"
        value={batchDate}
        onChangeText={(text) => setBatchDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}

        placeholder="Quantity"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />
      <Button title="Add Inventory Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color:'black',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    color:'grey',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default InventoryAdd;
