import { useData } from "../../hooks/useModal/useData";

interface Props {
  buttonStyle: string;
  textStyle?: string;
  logoutText: string;
}

export function AuthButton({ buttonStyle, textStyle, logoutText }: Props) {
  const { setIsModalOpen, user, setUser } = useData();

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    setUser(undefined);
  };

  return (
    <button className={buttonStyle} onClick={user ? handleLogout : handleLogin}>
      <div className={textStyle ? textStyle : ""}>
        {user ? logoutText : "Войти"}
      </div>
    </button>
  );
}
