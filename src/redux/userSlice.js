import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  messages: "",
  mess: null,
  msg: "",
  newUser: {
    infor: null,
    isFetching: false,
    error: false,
  },
};
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    msg: "",
    messages: "",
    mess:"",
    newUser: {
      infor: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    createUserStart: (state) => {
      state.newUser.isFetching = true;
    },
    createUserSuccess: (state, action) => {
      state.newUser.isFetching = false;
      state.newUser.error = false;
      state.newUser.infor = action.payload;
      state.mess ="Create User successfully";
    },
    createUserFailed:(state,action)=> {
      state.newUser.error = true;
      state.mess =action.payload;
    },
    updateUserStart: (state) => {
      state.users.isFetching = true;
      state.users.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.error = false;
      state.msg = action.payload;
    },
    updateUserFailed: (state, action) => {
      state.users.isFetching = false;
      state.users.error = true;
      state.msg = action.payload;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    deleteUserStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.messages = action.payload;
      state.users.error = false;
    },
    deleteUserFailed: (state, action) => {
      state.users.isFetching = false;
      state.users.error = true;
      state.messages = action.payload;
    },
  },
});

export const {
  createUserStart,
  createUserSuccess,
  createUserFailed,
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
  reset,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
