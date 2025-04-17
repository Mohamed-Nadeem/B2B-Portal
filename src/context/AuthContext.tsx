import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserCredentials } from "../types";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: UserCredentials) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({
    username,
    password,
  }: UserCredentials): Promise<boolean> => {
    // Mock login for now; replace with JD Edwards API call
    if (username === "test" && password === "test") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
    // Future JD Edwards API integration:
    // const response = await api.post('/auth/login', { username, password });
    // if (response.success) {
    //   setIsAuthenticated(true);
    //   return true;
    // }
    // return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
