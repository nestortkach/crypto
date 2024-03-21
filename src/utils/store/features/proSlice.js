/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscriptionList: [],
};

export const proSlice = createSlice({
  name: 'pro',
  initialState,
  reducers: {
    setSubscriptionList: (state, action) => {
      state.subscriptionList = action.payload;
    },
    updateSubscriptionInList: (state, action) => {
      if (state.subscriptionList.length > 0) {
        state.subscriptionList = state.subscriptionList?.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          }

          return el;
        });
      } else {
        state.subscriptionList = [action.payload];
      }
    },
  },
});

export const selectAllSubscriptions = (state) => state.pro.subscriptionList;

export const selectSubscriptionById = (state, subId) => {
  if (state.pro.subscriptionList.length > 0) {
    return state.pro.subscriptionList?.find((sub) => sub.id === subId);
  }
  return null;
};

export const { setSubscriptionList, updateSubscriptionInList } = proSlice.actions;

export default proSlice.reducer;
