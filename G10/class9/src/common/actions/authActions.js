import { LOGIN, LOGOUT } from "../const/authActions.const";

export const login = (email, password) => {
  // here would go an actual BE call for logging in and fetching user data

  return {
    type: LOGIN,
    payload: {
      email,
      password,
      name: "Ivo",
    },
  };
};

export const logout = () => {
  // here we would make an actual logout api call

  return {
    type: LOGOUT,
  };
};
