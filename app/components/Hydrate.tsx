"use client";

import { useThemeStore } from "@/store";
import { useEffect, useState, ReactNode } from "react";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  //Wait till next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        <body
          className=" mx-4 lg:px-48 font-roboto"
          data-theme={themeStore.mode}
        >
          {children}
        </body>
      ) : (
        <body></body>
      )}
    </>
  );
};

export default Hydrate;
