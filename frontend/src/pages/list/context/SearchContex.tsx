import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const SearchContext = createContext<{
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}>({} as any);

interface SearchContextProviderProps {
  children: ReactNode;
}
export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [keywords, setKeywords] = useState('');

  return (
    <SearchContext.Provider
      value={{
        keywords,
        setKeywords,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
