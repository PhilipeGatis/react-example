export const login = (email, password) => {
  return {
    type: 'login', payload: {
      email,
      password
    }
  };
}

export const logout = () => {
  return {
    type: 'logout',
  };
}
