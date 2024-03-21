import { useCrossStorage } from 'hooks/useCrossStorage';
import CrossStorageContext from 'utils/context/crossStorageContext';

export function AppWrapper({ children }) {
  const { logout, loading } = useCrossStorage();

  return <CrossStorageContext value={{ logout, loading }}>{children}</CrossStorageContext>;
}
