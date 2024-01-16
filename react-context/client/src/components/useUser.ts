import { AppContext } from './AppContext';
import { AppContextValues } from './AppContext';
import { useContext } from 'react';

export function useUser(): AppContextValues {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(
      'useUser must only be used in component inside UserProvider'
    );
  }
  return context;
}
