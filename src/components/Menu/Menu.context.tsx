import { createContext, useState } from "react";

type TId = string;

type TMenuContext = {
  active: TId | null;
};

const MenuContext = createContext<TMenuContext>({
  active: null,
});

function MenuContextProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(null);

  return (
    <MenuContext.Provider
      value={{
        active,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContextProvider };
