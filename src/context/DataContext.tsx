import { createContext } from "react";

export interface User {
  name: string;
}

interface DataContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const DataContext = createContext<DataContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  user: undefined,
  setUser: () => {},
});
