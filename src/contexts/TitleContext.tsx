"use client"
import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";

interface TitleContext {
  title: string;
  setTitleFunction: (data: string) => void;
}

export const TitleContext = createContext({} as TitleContext);

interface TitleProviderProps {
  children: ReactNode;
}

function TitleProvider({ children }: TitleProviderProps) {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const keyPath = window.location.pathname.split("/").filter((e) => e !== "");
    setTitle(keyPath[keyPath.length - 1].charAt(0).toUpperCase() + keyPath[keyPath.length - 1].slice(1).toLowerCase())
  }, []);

  function setTitleFunction(data: string) {
    setTitle(data);
  }

  return (
    <TitleContext.Provider value={{ title, setTitleFunction}}>
      {children}
    </TitleContext.Provider>
  );
}

export default TitleProvider;
