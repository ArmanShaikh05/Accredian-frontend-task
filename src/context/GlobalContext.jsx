/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const handleScroll = (targetId) => {
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        openForm,
        setOpenForm,
        handleScroll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
