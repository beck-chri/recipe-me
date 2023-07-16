import {
  LinkList,
  logo,
  mainNavigation,
} from "@/app/components/MainNavigation/MainNavigation.styles";
import { navigationItems } from "@/app/components/MainNavigation/config";

type Props = {};

type ItemProps = {
  href: string;
  title: string;
};

const MainNavigationItem = ({ href, title }: ItemProps) => {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};

export const MainNavigation = ({}: Props) => {
  return (
    <div className={mainNavigation}>
      <nav>
        <div>
          <ul className={LinkList}>
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
      <span className={logo}>RecipeMe</span>
      <span>🧑‍🍳</span>
    </div>
  );
};
