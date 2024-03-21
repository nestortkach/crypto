/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fiatCurrenciesList: null,
  cryptoCurrenciesList: null,
  fiatCurrenciesListUnfiltered: [],
  cryptoCurrenciesListUnfiltered: [],
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setFiatList: (state, action) => {
      state.fiatCurrenciesList = action.payload;
    },
    setCryptoList: (state, action) => {
      state.cryptoCurrenciesList = action.payload;
    },
    setFiatListUnfiltered: (state, action) => {
      state.fiatCurrenciesListUnfiltered = action.payload;
    },
    setCryptoListUnfiltered: (state, action) => {
      state.cryptoCurrenciesListUnfiltered = action.payload;
    },
  },
});

export const selectFiatCurrenciesList = (state) => state.coins.fiatCurrenciesList;
export const selectCryptoCurrenciesList = (state) => state.coins.cryptoCurrenciesList;
export const selectFiatCurrenciesListUnfiltered = (state) => state.coins.fiatCurrenciesListUnfiltered;
export const selectCryptoCurrenciesListUnfiltered = (state) => state.coins.cryptoCurrenciesListUnfiltered;

export const { setFiatList, setCryptoList, setFiatListUnfiltered, setCryptoListUnfiltered } = coinsSlice.actions;

export default coinsSlice.reducer;
