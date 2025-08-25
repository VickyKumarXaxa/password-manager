"use client";
import { GlobalStateContextType } from "@/types/GlobalState";
import { createContext, ReactNode, useContext, useState } from "react";

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string>("");

  return (
    <GlobalStateContext.Provider value={{ username, setUsername }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within GlobalStateProvider");
  }
  return context;
}
