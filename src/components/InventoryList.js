import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import InventoryItem from './InventoryItem';

const InventoryList = ({ inventoryItems }) => {
  useEffect(() => {
    console.log('Inventory Items:', inventoryItems);
  }, [inventoryItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory List</Text>
      {inventoryItems && inventoryItems.length > 0 ? (
        <FlatList
          data={inventoryItems}
          renderItem={({ item }) => <InventoryItem item={item} />}
        />
      ) : (
        <Text style={styles.noItemsMessage}>No inventory items. Add an item!</Text>
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
    fontSize: 20,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noItemsMessage: {
    fontSize: 16,
    color:'black',
    marginTop: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    inventoryItems: state.inventory.inventory,
  };
};

export default connect(mapStateToProps)(InventoryList);
