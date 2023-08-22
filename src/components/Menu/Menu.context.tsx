import { createContext, useContext, useEffect, useRef, useState } from "react";

type TMenuContext = {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};

const MenuContext = createContext<TMenuContext>({
  activeId: null,
  setActiveId: () => null,
  onMouseEnter: () => null,
  onMouseLeave: () => null,
});

function MenuContextProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const onMouseEnter = (id: string) => {
    timeRef.current && clearTimeout(timeRef.current);
    setActiveId(id);
  };

  const onMouseLeave = () => {
    timeRef.current = setTimeout(() => {
      setActiveId(null);
    }, 500);
  };

  useEffect(() => {
    return () => {
      timeRef.current && clearTimeout(timeRef.current);
    };
  });

  return (
    <MenuContext.Provider
      value={{
        activeId,
        setActiveId,
        onMouseEnter,
        onMouseLeave,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenuContext() {
  const ctx = useContext(MenuContext);

  if (ctx === undefined) {
    throw new Error("Menu not found in the tree");
  }

  return ctx;
}

export { MenuContextProvider, useMenuContext };
