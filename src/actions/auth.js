export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';


export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password
  }
})

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: {
    error
  }
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user
  }
})

export const logout = () => ({
  type: LOGOUT
})
