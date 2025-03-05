export const setUserInfo = (token: string, role: string) => {
  const userInfo = {
    token,
    role
  };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const getUserInfo = () => {
  const storedUserInfo = localStorage.getItem('userInfo');
  if (storedUserInfo) {
    return JSON.parse(storedUserInfo);
  }
  return null;
};

export const removeUserInfo = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
};
