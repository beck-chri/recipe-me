import {
  navigationItems,
  NavItemData,
} from "@/app/components/MainNavigation/config";
import {
  LinkList,
  LogoNavWrapper,
  LogoWrapper,
  NavigationItem,
  Wrapper,
} from "@/app/components/MainNavigation/DesktopNavigation/DesktopNavigation.styles";

type DesktopNavigationItemProps = {
  config: NavItemData;
};

const DesktopNavigationItem = ({ config }: DesktopNavigationItemProps) => {
  return (
    <NavigationItem href={config.href}>{config.displayName}</NavigationItem>
  );
};

export const DesktopNavigation = () => {
  return (
    <Wrapper>
      <LogoNavWrapper>
        <LogoWrapper>RecipeMe</LogoWrapper>
        <nav>
          <div>
            <LinkList>
              <li>
                <DesktopNavigationItem config={navigationItems.RECIPES} />
              </li>
              <li>
                <DesktopNavigationItem config={navigationItems.SHOPPING_LIST} />
              </li>
            </LinkList>
          </div>
        </nav>
      </LogoNavWrapper>
      <DesktopNavigationItem config={navigationItems.PROFILE} />
    </Wrapper>
  );
};
