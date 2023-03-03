import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const CategoryContext = createContext<{
  categoryId: string;
  setCategoryId: Dispatch<SetStateAction<string>>;
}>({} as any);

interface CategoryContextProviderProps {
  children: ReactNode;
}
export function CategoryContextProvider({ children }: CategoryContextProviderProps) {
  const [categoryId, setCategoryId] = useState('0');

  return (
    <CategoryContext.Provider
      value={{
        categoryId,
        setCategoryId,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
