import { createContext } from "react";

interface DataContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});
