"use client"
import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";

interface LoadingContext {
  loading: boolean;
  isLoading: (data: boolean) => void;
}

export const LoadingContext = createContext({} as LoadingContext);

interface LoadingProviderProps {
  children: ReactNode;
}

function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(true);

  function isLoading(data: boolean) {
    setLoading(data);
  }

  return (
    <LoadingContext.Provider value={{ loading, isLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
