import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";
import { User } from "../types/User";
import toast from "react-hot-toast";

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
    const response: any = await api.get("/users");

    const foundedUser = response.data.find((u: user) => u.email === data.email);

    console.log(foundedUser);
    if (foundedUser?.password !== data.password) {
      toast.error(`Email ou senha invalido`);
      throw new Error("Unvalid password or email");
    } else setUserData(foundedUser);
    toast.success(`Bem Vindo ${userData?.userFirstName}`);
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
