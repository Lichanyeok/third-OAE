import axios from "axios";
import cookie from "react-cookies";
const setToken = (accessToken, refreshToken) => {
  console.log("호출됨");
  axios.defaults.headers.Authorization = `Bearer ${accessToken}`;

  cookie.save("accessToken", accessToken, {
    path: "/",
  });

  cookie.save("refreshToken", refreshToken, {
    path: "/",
  });
};

export default setToken;
