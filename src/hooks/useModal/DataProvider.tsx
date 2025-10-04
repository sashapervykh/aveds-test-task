import { useState } from "react";
import { DataContext, type User } from "../../context/DataContext";
import { UserSchema } from "../../models/formSchema";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<null | User>(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) return null;
    const typedUser = UserSchema.safeParse(JSON.parse(savedUser)).data;
    return typedUser ? typedUser : null;
  });

  const setUserData = (data: { name: string }) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const removeUserData = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const dataContextValue = {
    isModalOpen,
    setIsModalOpen,
    user,
    setUserData,
    removeUserData,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
