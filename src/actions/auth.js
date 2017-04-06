export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_FAILED = 'AUTHENTICATE_FAILED';

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: {
    email,
    password
  }
})

export const authenticateFailed = (error) => ({
  type: AUTHENTICATE_FAILED,
  payload: {
    error
  }
})

export const login = (user) => ({
  type: LOGIN,
  payload: {
    user
  }
})

export const logout = () => ({
  type: LOGOUT
})
