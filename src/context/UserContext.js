import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLogged, setLogged] = useState(false)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setLogged
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
