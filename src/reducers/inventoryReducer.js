const initialState = {
    inventory: [],
  };
  
  const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_INVENTORY_ITEM':
        // Handle adding an inventory item
        console.log('Reducer received ADD_INVENTORY_ITEM:', action.payload);
        return {
          ...state,
          inventory: [...state.inventory, action.payload],
        };
      case 'APPROVE_INVENTORY_ITEM':
        // Handle approving an inventory item
        const updatedInventory = state.inventory.map((item) => {
          if (item.productName === action.payload) {
            return {
              ...item,
              status: 'Approved',
            };
          }
          return item;
        });
        return {
          ...state,
          inventory: updatedInventory,
        };
      default:
        return state;
    }
  };
  
  export default inventoryReducer;
  