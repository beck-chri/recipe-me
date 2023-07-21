import {
  LinkList,
  Wrapper,
} from "@/app/components/MainNavigation/MobileNavigation/MobileNavigation.styles";
import { MobileNavigationItem } from "@/app/components/MainNavigation/MobileNavigation/MobileNavigationItem/MobileNavigationItem";
import { navigationItems } from "@/app/components/MainNavigation/config";

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
