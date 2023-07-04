import { LOGIN } from "../const/authActions.const";

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
