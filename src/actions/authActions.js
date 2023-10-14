// authActions.js

// Action types
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action creators
export const login = (userData) => ({
  type: 'LOGIN',
  payload: userData,
});


export const logout = () => ({
  type: 'LOGOUT',
});


