export type NavItemData = {
  href: string;
  displayName: string;
  iconFilename: string;
};

type Page = "RECIPES" | "SHOPPING_LIST" | "PROFILE";

export const navigationItems: Record<Page, NavItemData> = {
  RECIPES: {
    href: "/recipes",
    displayName: "Rezepte",
    iconFilename: "home.svg",
  },
  SHOPPING_LIST: {
    href: "/shopping-list",
    displayName: "Einkaufsliste",
    iconFilename: "shopping.svg",
  },
  PROFILE: {
    href: "/profile",
    displayName: "Profil",
    iconFilename: "user.svg",
  },
};
