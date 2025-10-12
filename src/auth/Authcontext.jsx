import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username, password) => {
    if (username == "ayush" && password == "1234") {
      setUser({ username });
      return true;
    }
    return false;
  };
  const Logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
