import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventoryItems, approveInventoryItem } from '../actions/inventoryActions';

const InventoryScreen = () => {
  const [inventoryList, setInventoryList] = useState([]);

  const dispatch = useDispatch();
  const inventory = useSelector(state => state.inventory);

  useEffect(() => {
    // Fetch inventory items when the component mounts
    dispatch(fetchInventoryItems());
  }, []);

  const handleApproveItem = (itemId) => {
    // Dispatch an action to approve the inventory item with the given itemId
    dispatch(approveInventoryItem(itemId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Management</Text>
      {inventory.loading ? (
        <Text>Loading inventory items...</Text>
      ) : (
        <FlatList
          data={inventoryList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.inventoryItem}>
              <Text>{item.productName}</Text>
              <Text>Vendor: {item.vendor}</Text>
              <Text>Quantity: {item.quantity}</Text>
              {item.status === 'Pending' && (
                <Button
                  title="Approve"
                  onPress={() => handleApproveItem(item.id)}
                />
              )}
            </View>
          )}
        />
      )}
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
    marginBottom: 20,
  },
  inventoryItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default InventoryScreen;
