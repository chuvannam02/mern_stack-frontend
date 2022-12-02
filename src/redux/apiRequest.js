import axios from "axios";
import {
  forgetFailed,
  forgetStart,
  forgetSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  resetFailed,
  resetStart,
  resetSuccess,
} from "./authSlice";
import {
  getProductsFailed,
  getProductsStart,
  getProductsSuccess,
  getProductSuccess,
  reset1,
} from "./productSlice";
import {
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
  reset,
  updateUserStart,
  updateUserFailed,
  updateUserSuccess,
  createUserStart,
  createUserFailed,
  createUserSuccess,
} from "./userSlice";

export const loginUser = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://mern-stack-backend-kw0h.onrender.com/login", user, {
      withCredentials: true,
    });
    // localStorage.setItem("token", res.data.accessToken);
    dispatch(loginSuccess(res.data));
    history.push("/");
  } catch (error) {
    if (error.response?.status === 404) {
      dispatch(loginFailed("No user found for this email address"));
    }
    if (error.response?.status === 401) {
      dispatch(loginFailed("Password Incorrect"));
    }
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, history) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("https://mern-stack-backend-kw0h.onrender.com/register", user);
    dispatch(registerSuccess(res.data));
    history.push("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (accessToken, dispatch,axiosJWT) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get("https://mern-stack-backend-kw0h.onrender.com/user/all", {
      headers: {
        token: accessToken,
      },
      withCredentials: true,
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailed());
  }
};
export const updateUser = async (accessToken, dispatch, id, user) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.patch(
      "https://mern-stack-backend-kw0h.onrender.com/user/update/" + id,
      user,
      {
        headers: {
          token: accessToken,
          "Content-type": "application/json",
        },
      }
    );
    dispatch(updateUserSuccess(res.data));
  } catch (error) {
    dispatch(updateUserFailed());
  }
};
export const deleteUser = async (accessToken, dispatch, id,axiosJWT) => {
  dispatch(reset());
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete("https://mern-stack-backend-kw0h.onrender.com/user/delete/" + id, {
      headers: {
        token: accessToken,
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch(deleteUserSuccess("Delete user successfully"));
  } catch (error) {
    if (error.request?.status === 403) {
      dispatch(deleteUserFailed("You are not allow to delete other users"));
    } else {
      dispatch(deleteUserFailed(error.response?.data));
    }
  }
};

export const logoutUser = async (token, id, dispatch, history) => {
  dispatch(reset());
  dispatch(logoutStart());
  try {
    await axios.post("https://mern-stack-backend-kw0h.onrender.com/logout", id, {
      headers: {
        token: token,
      },
      withCredentials: true,
    });
    dispatch(logoutSuccess());
    history.push("/login");
  } catch (error) {
    dispatch(logoutFailed({ error: error.message }));
  }
};
export const forgetPassword = async (email, dispatch) => {
  dispatch(forgetStart());
  try {
    const res = await axios.post(
      "https://mern-stack-backend-kw0h.onrender.com/forget-password",
      email
    );
    dispatch(forgetSuccess(res.data));
  } catch (error) {
    dispatch(forgetFailed(error));
  }
};
export const resetPassword = async (password, dispatch, history, token) => {
  dispatch(resetStart());
  try {
    const res = await axios.patch(
      `https://mern-stack-backend-kw0h.onrender.com/reset-password/${token.token}`,
      password,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(resetSuccess(res.data));
    history.push("/login");
  } catch (error) {
    dispatch(resetFailed(error));
  }
};

export const createAnUser = async (newUser, accessToken, dispatch, history,axiosJWT) => {
  dispatch(createUserStart());
  try {
    const res = await axiosJWT.post("https://mern-stack-backend-kw0h.onrender.com/user", newUser, {
      headers: {
        token: accessToken,
      },
    });
    history.push("/users");
    dispatch(createUserSuccess(res.data));
  } catch (error) {
    if (error.response?.status === 403) {
      dispatch(createUserFailed("You're not allow to create new User"));
    } else {
      dispatch(createUserFailed(error));
    }
  }
};

export const getAllProducts = async (dispatch) => {
  dispatch(reset1());
  dispatch(getProductsStart());
  try {
    const res = await axios.get("https://mern-stack-backend-kw0h.onrender.com/products/all");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailed());
  }
};

export const GetAProduct = async (dispatch, id) => {
  dispatch(getProductsStart());
  try {
    const response = await axios.get("https://mern-stack-backend-kw0h.onrender.com/products/" + id);
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailed());
  }
};
