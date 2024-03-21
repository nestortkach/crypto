export const checkExpireDate = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const setToken = (response) => {
  localStorage.setItem('access_token', response.accessToken);
  localStorage.setItem('expires_in', response.expiresIn);
  localStorage.setItem('refresh_token', response.refreshToken);
};

export const deleteToken = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('expires_in');
  localStorage.removeItem('refresh_token');
};

export const getToken = () => ({
  accessToken: localStorage.getItem('access_token'),
  expiresIn: localStorage.getItem('expires_in'),
  refreshToken: localStorage.getItem('refresh_token'),
});

export const getAccessToken = () =>
  localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;

export const getRefreshToken = () =>
  localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : null;
