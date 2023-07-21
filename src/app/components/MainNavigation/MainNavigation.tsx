import {
  linkList,
  logo,
  logoNavWrapper,
  mainNavigation,
  navigationItem,
} from "@/app/components/MainNavigation/MainNavigation.styles";
import { navigationItems } from "@/app/components/MainNavigation/config";

type ItemProps = {
  href: string;
  title: string;
};

const MainNavigationItem = ({ href, title }: ItemProps) => {
  return (
    <li>
      <a className={navigationItem} href={href}>
        {title}
      </a>
    </li>
  );
};

export const MainNavigation = () => {
  return (
    <div className={mainNavigation}>
      <div className={logoNavWrapper}>
        <span className={logo}>RecipeMe</span>
        <nav>
          <div>
            <ul className={linkList}>
              {navigationItems.map(({ href, displayName }) => (
                <MainNavigationItem
                  href={href}
                  title={displayName}
                  key={displayName}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <span>🧑‍🍳</span>
    </div>
  );
};
