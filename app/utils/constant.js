export const NavlinksData = [
  { id: 1, href: "/", text: "Home", className: "hover:text-teal-500" },
  { id: 2, href: "/about", text: "About Us", className: "hover:text-teal-500" },
  {
    id: 3,
    href: "/services",
    text: "Services",
    className: "hover:text-teal-500",
    dropdown: [
      { href: "/services/service1", text: "Service 1" },
      { href: "/services/service2", text: "Service 2" },
      { href: "/services/service3", text: "Service 3" },
    ],
  },
  {
    id: 4,
    href: "/languages",
    text: "Languages",
    className: "hover:text-teal-500",
    dropdown: [
      { href: "/languages/english", text: "English" },
      { href: "/languages/spanish", text: "Spanish" },
      { href: "/languages/arabic", text: "Arabic" },
    ],
  },
  { id: 5, href: "/", text: "اللغه العربيه", className: "hover:text-teal-500" },
  { id: 6, href: "/blog", text: "Blog", className: "hover:text-teal-500" },
];
