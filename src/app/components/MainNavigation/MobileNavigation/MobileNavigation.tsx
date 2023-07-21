import { styled } from "../../../../../_styled-system/jsx";
import { LinkList } from "@/app/components/MainNavigation/MobileNavigation/MobileNavigation.styles";
import { MobileNavigationItem } from "@/app/components/MainNavigation/MobileNavigation/MobileNavigationItem/MobileNavigationItem";
import { navigationItems } from "@/app/components/MainNavigation/config";

const Wrapper = styled("div", {
  base: {
    marginTop: "auto",
    backgroundColor: "background",
    hideFrom: "md",
    boxShadow: "0px 0px 5px 2px rgb(0 0 0 / 10%)",
    padding: ".7rem",
  },
});

export const MobileNavigation = () => {
  return (
    <Wrapper>
      <nav>
        <LinkList>
          <MobileNavigationItem config={navigationItems.RECIPES} />
          <MobileNavigationItem config={navigationItems.SHOPPING_LIST} />
          <MobileNavigationItem config={navigationItems.PROFILE} />
        </LinkList>
      </nav>
    </Wrapper>
  );
};
