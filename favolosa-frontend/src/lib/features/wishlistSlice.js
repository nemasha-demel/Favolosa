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
        // ✅ Only add if not already in wishlist
        state.wishlistItems.push({ product: newItem, quantity: 1 });
      }
      // ❌ else do nothing (no duplicates, no increment)
    },

    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (el) => el.product._id !== productId
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
