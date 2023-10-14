// inventoryActions.js

// Action types
export const ADD_INVENTORY_ITEM = 'ADD_INVENTORY_ITEM';
export const APPROVE_INVENTORY_ITEM = 'APPROVE_INVENTORY_ITEM';

// Action creators

export const addInventoryItem = (itemData) => {
  return {
    type: ADD_INVENTORY_ITEM,
    payload: itemData,
  };
};




export const approveInventoryItem = (itemId) => {
    console.log(itemId)
  return {
    type: APPROVE_INVENTORY_ITEM,
    payload: itemId,
  };
};
