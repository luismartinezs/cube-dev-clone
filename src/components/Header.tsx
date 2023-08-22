import { Logo } from "~/components/Logo";
import { Menu } from "~/components/Menu/Menu";
import { NavItem, type TNavItem } from "~/components/NavItem";

const navLinks: Array<TNavItem> = [
  {
    type: "menu",
    label: "Product",
    menu: [
      {
        label: "Why cube cloud?",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Data Modeling",
        href: "https://cube.dev/product/data-modeling",
      },
      {
        label: "Data Access Control",
        href: "https://cube.dev/product/data-access-control",
      },
      {
        label: "Caching and Data Performance",
        href: "https://cube.dev/product/caching-and-data-performance",
      },
      {
        label: "Data APIs",
        href: "https://cube.dev/product/data-apis",
      },
      {
        label: "Security",
        href: "https://cube.dev/product/semantic-layer-security",
      },
    ],
  },
  {
    type: "menu",
    label: "Use Cases",
    menu: [
      {
        label: "Embedded Analytics",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Semantic Layer",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "LLM & AI",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Real-time Analytics",
        href: "https://cube.dev/product/why-cube-cloud",
      },
    ],
  },
  {
    type: "link",
    label: "Integrations",
    href: "https://cube.dev/integrations",
  },
  {
    type: "link",
    label: "Pricing",
    href: "https://cube.dev/pricing",
  },
  {
    type: "menu",
    label: "Resources",
    menu: [
      {
        label: "Learning Hub",
        subLabel: "Read about major concepts and dive into technical details",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Docs",
        subLabel: "Read about major concepts and dive into technical details",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Blog",
        subLabel: "Product updates, user stories, and more",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Examples",
        subLabel: "Explore what you can build with Cube",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Community",
        subLabel: "See how to contribute to Cube",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Events",
        subLabel: "Learn more about our upcoming events",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Customer Stories",
        subLabel: "See how leading companies use Cube",
        href: "https://cube.dev/product/why-cube-cloud",
      },
      {
        label: "Cube Partner Network",
        subLabel: "Connect with Cube Consulting Partners",
        href: "https://cube.dev/product/why-cube-cloud",
      },
    ],
  },
];

const secondaryLinks: Array<TNavItem> = [
  {
    type: "link",
    style: "link",
    label: "Sign in",
    href: "https://cubecloud.dev/auth",
  },
  {
    type: "link",
    style: "button",
    label: "Request a demo",
    href: "https://cube.dev/contact",
  },
];

export function Header() {
  return (
    <header className="flex items-center justify-between bg-dark-200 py-4">
      <div className="container mx-auto flex w-full items-center justify-between">
        <Logo />
        <nav aria-label="primary" className="font-semibold">
          <Menu>
            <ul className="flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavItem item={link} />
                </li>
              ))}
            </ul>
          </Menu>
        </nav>
        <nav aria-label="secondary" className="font-semibold">
          <ul className="flex items-center justify-center gap-8">
            {secondaryLinks.map((link) => (
              <li key={link.label}>
                <NavItem item={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
