import { useState } from "react";
import { DataContext, type User } from "../../context/DataContext";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<undefined | User>(undefined);

  const dataContextValue = {
    isModalOpen,
    setIsModalOpen,
    user,
    setUser,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
