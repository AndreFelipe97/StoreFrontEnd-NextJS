"use client"
import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";

interface BreadcrumbsContext {
  breadcrumbNames: string[];
  setBreadcrumbNameFunction: (data: string[]) => void;
}

export const BreadcrumbsContext = createContext({} as BreadcrumbsContext);

interface BreadcrumbsProviderProps {
  children: ReactNode;
}

function BreadcrumbsProvider({ children }: BreadcrumbsProviderProps) {
  const [breadcrumbNames, setBreadcrumbName] = useState<string[]>([]);

  useEffect(() => {
    const keyPath = window.location.pathname.split("/").filter((e) => e !== "");
    setBreadcrumbName(keyPath);
  }, []);

  function setBreadcrumbNameFunction(data: string[]) {
    setBreadcrumbName(data);
  }

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbNames, setBreadcrumbNameFunction}}>
      {children}
    </BreadcrumbsContext.Provider>
  );
}

export default BreadcrumbsProvider;
