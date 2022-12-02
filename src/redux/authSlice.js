import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
      isLogin: false,
    },
    mss: false,
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    forgetPassword: {
      isFetching: false,
      error: false,
      sendEmail: false,
      infor: null,
    },
    resetPassword: {
      isFetching: false,
      error: false,
      success: false,
      info: null,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
      state.login.mss = true;
      state.login.isLogin = true;
    },
    loginFailed: (state, action) => {
      state.login.isFetching = false;
      state.login.error = true;
      state.login.mss = false;
      state.login.isLogin = false;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
      state.register.error = false;
      state.register.success = false;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    logoutStart: (state) => {
      state.login.isFetching = true;
      state.login.error = false;
    },
    logoutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.error = false;
      state.login.currentUser = null;
      state.login.mss = false;
      state.login.isLogin = false;
    },
    logoutFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    forgetStart: (state) => {
      state.forgetPassword.isFetching = true;
      state.forgetPassword.error = false;
      state.forgetPassword.sendEmail = false;
    },
    forgetSuccess: (state, action) => {
      state.forgetPassword.isFetching = false;
      state.forgetPassword.error = false;
      state.forgetPassword.sendEmail = true;
      state.forgetPassword.infor = action.payload;
    },
    forgetFailed: (state) => {
      state.forgetPassword.isFetching = false;
      state.forgetPassword.error = true;
      state.forgetPassword.sendEmail = false;
    },
    resetStart: (state) => {
      state.resetPassword.isFetching = true;
      state.resetPassword.error = false;
    },
    resetSuccess: (state, action) => {
      state.resetPassword.isFetching = false;
      state.resetPassword.error = false;
      state.resetPassword.success = true;
      state.resetPassword.info = action.payload;
    },
    resetFailed: (state) => {
      state.resetPassword.isFetching = false;
      state.resetPassword.error = true;
      state.resetPassword.success = false;
      state.resetPassword.info = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  forgetFailed,
  forgetSuccess,
  forgetStart,
  resetStart,
  resetSuccess,
  resetFailed,
} = authSlice.actions;

export default authSlice.reducer;
