import { useState } from "react";

import { DataContext } from "../../context/DataContext";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dataContextValue = {
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
