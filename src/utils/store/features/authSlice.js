/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  emailApproved: false,
  emailValid: false,
  emailInput: '',
  emailCode: '',
  emailVerificationId: '',
  phoneApproved: false,
  phoneValid: false,
  phoneInput: '',
  phoneCode: '',
  phoneVerificationId: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setEmailValid: (state, action) => {
      state.emailValid = action.payload;
    },
    setIsEmailApproved: (state, action) => {
      state.emailApproved = action.payload;
    },
    setEmailInput: (state, action) => {
      state.emailInput = action.payload;
    },
    setEmailCode: (state, action) => {
      state.emailCode = action.payload;
    },
    setEmailVerificationId: (state, action) => {
      state.emailVerificationId = action.payload;
    },
    setPhoneValid: (state, action) => {
      state.phoneValid = action.payload;
    },
    setIsPhoneApproved: (state, action) => {
      state.phoneApproved = action.payload;
    },
    setPhoneInput: (state, action) => {
      state.phoneInput = action.payload;
    },
    setPhoneCode: (state, action) => {
      state.phoneCode = action.payload;
    },
    setPhoneVerificationId: (state, action) => {
      state.phoneVerificationId = action.payload;
    },
  },
});

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectEmailApproved = (state) => state.auth.emailApproved;
export const selectEmailInput = (state) => state.auth.emailInput;
export const selectEmailCode = (state) => state.auth.emailCode;
export const selectEmailValid = (state) => state.auth.emailValid;
export const selectEmailVerificationId = (state) => state.auth.emailVerificationId;
export const selectPhoneApproved = (state) => state.auth.phoneApproved;
export const selectPhoneInput = (state) => state.auth.phoneInput;
export const selectPhoneCode = (state) => state.auth.phoneCode;
export const selectPhoneValid = (state) => state.auth.phoneValid;
export const selectPhoneVerificationId = (state) => state.auth.phoneVerificationId;

export const {
  setIsAuth,
  setEmailValid,
  setIsEmailApproved,
  setEmailInput,
  setEmailCode,
  setEmailVerificationId,
  setPhoneValid,
  setIsPhoneApproved,
  setPhoneInput,
  setPhoneCode,
  setPhoneVerificationId,
} = authSlice.actions;

export default authSlice.reducer;
