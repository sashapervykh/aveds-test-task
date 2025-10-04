import { createContext } from "react";

export interface User {
  name: string;
}

interface DataContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUserData: (data: User) => void;
  removeUserData: () => void;
}

export const DataContext = createContext<DataContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  user: null,
  setUserData: (data: User) => data,
  removeUserData: () => {},
});
