import { MenuContextProvider } from "~/components/Menu/Menu.context";
import { MenuDropdown } from "~/components/Menu/MenuDropdown";
import { MenuItem } from "~/components/Menu/MenuItem";
import { MenuTarget } from "~/components/Menu/MenuTarget";

export function Menu({ children }: { children: React.ReactNode }) {
  return <MenuContextProvider>{children}</MenuContextProvider>;
}

Menu.Item = MenuItem;
Menu.Dropdown = MenuDropdown;
Menu.Target = MenuTarget;
