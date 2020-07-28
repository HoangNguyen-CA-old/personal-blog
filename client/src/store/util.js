export const updateObject = (state, object) => {
  return { ...state, ...object };
};

export const tokenConfig = (getState) => {
  //Headers
  const token = getState().auth.token;
  const config = { headers: {} };
  if (token) {
    config.headers['authorization'] = `bearer ${token}`;
  }
  return config;
};
