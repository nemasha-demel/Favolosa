import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlistItems: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const foundItem = state.wishlistItems.find(
        (el) => el.product._id === newItem._id
      );
      if (!foundItem) {
        state.wishlistItems.push({ product: newItem, quantity: 1 });
      } else {
        foundItem.quantity += 1;
      }
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
})

// Action creators
export const { addToWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
