"use client";
import React from "react";

const LayoutContext = React.createContext();

export function useLayoutContext() {
  return React.useContext(LayoutContext);
}

const LayoutProvider = ({ children }) => {
  return (
    <LayoutContext.Provider value="isNavOpen">
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
