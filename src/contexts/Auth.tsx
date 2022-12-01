import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Data } from "../data/users";
import { User } from "../types/User";

interface user {
  email: string;
  password: string;
}
interface AuthContextData {
  User: User | undefined;
  Login(data: user): Promise<void>;
  Logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<User | undefined>();

  async function Login(data: user) {
    const foundedUser = Data.find((u) => u.email === data.email);
    if (foundedUser?.password !== data.password)
      throw new Error("Unvalid password or email");
    setUserData(foundedUser);
  }
  async function Logout() {
    setUserData(undefined);
  }
  return (
    <AuthContext.Provider
      value={{
        User: userData,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
