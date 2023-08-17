import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'

const refreshToken = async () => {
  try {
    let refreshToken1 = Cookies.get('refreshToken'); // => 'value'
    const res = await axios.post(
      "https://mern-stack-backend-kw0h.onrender.com/refresh",
        {refreshToken1},
      {
        withCredentials: true,
        credentials: 'include' // This is important for sending cookies
      }
    );
    localStorage.setItem("token",`Bearer ${res.data.accessToken}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createAxios = (user, dispatch, stateSuccess) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken.split(" ")[1]);
      console.log(decodedToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
          // refreshToken gắn trong cookies rồi
          // refreshToken: data.refreshToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return newInstance;
};
