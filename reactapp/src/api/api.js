import axios from "./index";
import authLogin from "./Auth";

export const loginApi = async (payload) => {
  const response = await authLogin.post("/login", payload);
  return response;
};
export const signupApi = async (payload) => {
  const response = await authLogin.post("/signup", payload);
  return response;
};
