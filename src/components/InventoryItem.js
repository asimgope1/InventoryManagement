import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { approveInventoryItem } from '../actions/inventoryActions';

const InventoryItem = ({ item }) => {


  const dispatch = useDispatch();

  const handleApprove = () => {
    // Dispatch the approveInventoryItem action with the item's productName
    dispatch(approveInventoryItem(item.productName));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name:</Text>
      <Text style={styles.value}>{item.productName}</Text>
      <Text style={styles.label}>Vendor:</Text>
      <Text style={styles.value}>{item.vendor}</Text>
      <Text style={styles.label}>MRP:</Text>
      <Text style={styles.value}>{item.mrp}</Text>
      <Text style={styles.label}>Batch Number:</Text>
      <Text style={styles.value}>{item.batchNum}</Text>
      <Text style={styles.label}>Batch Date:</Text>
      <Text style={styles.value}>{item.batchDate}</Text>
      <Text style={styles.label}>Quantity:</Text>
      <Text style={styles.value}>{item.quantity}</Text>
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{item.status}</Text>
      {item.status === 'Pending' && (
        <Button title="Approve" onPress={handleApprove} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 16,
    color:'black',
    fontWeight: 'bold',
  },
  value: {
    color:'black',
    fontSize: 16,
  },
});

export default InventoryItem;
