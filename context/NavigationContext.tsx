/*
"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context to manage the navigation state
const NavigationContext = createContext({
  isNavigating: false,
  setIsNavigating: (value: boolean) => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <NavigationContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
*/

/*
"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the context value
interface NavigationContextType {
  isNavigating: boolean;
  setIsNavigating: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value
const NavigationContext = createContext<NavigationContextType>({
  isNavigating: false,
  setIsNavigating: () => {}, // Default as a no-op function
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <NavigationContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
*/

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";

// Define the type for the context value
interface NavigationContextType {
  isNavigating: boolean;
  navigate: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  isNavigating: false,
  navigate: () => {}, // Default as a no-op function
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const [, startTransition] = useTransition();

  const navigate = (href: string) => {
    setIsNavigating(true);

    startTransition(() => {
      router.push(href);
      setIsNavigating(false); // Explicitly reset state after push
    });
  };

  return (
    <NavigationContext.Provider value={{ isNavigating, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
