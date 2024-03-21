import { createContext } from 'react';

export const CrossStorage = createContext(null);

function CrossStorageContext({ children, value }) {
  return <CrossStorage.Provider value={{ ...value }}>{children}</CrossStorage.Provider>;
}

export default CrossStorageContext;
