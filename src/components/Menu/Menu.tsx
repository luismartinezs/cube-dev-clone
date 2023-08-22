import { MenuContextProvider } from "~/components/Menu/Menu.context";
import { MenuItem } from "~/components/Menu/MenuItem";

export function Menu({ children }: { children: React.ReactNode }) {
  return <MenuContextProvider>{children}</MenuContextProvider>;
}

Menu.Item = MenuItem;
