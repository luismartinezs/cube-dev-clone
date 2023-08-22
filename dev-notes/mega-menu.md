# Mega menu

Specs

- A nav menu with dropdowns
- On item mouseover, show dropdown
- Dropdown is displayed for 500ms even after mouseout
- if another item is moused over during that 500ms, old dropdown is immediately hidden and new one is shown

How

- React context with state to track the current hovered item
- When an item is hovered, it becomes active
- when an item becomes active, all other become inactive immediately
- when active item is not hovered (target or dropdown) for 500ms, set it inactive

Menu
  Menu.Target
  Menu.Dropdown
    Menu.Item
      label
      subLabel
      href