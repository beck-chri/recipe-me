import { styled, VStack } from "../../../../../../_styled-system/jsx";
import { NavItemData } from "@/app/components/MainNavigation/config";
import Image from "next/image";

type Props = {
  config: NavItemData;
};

export const MobileNavigationItem = ({ config }: Props) => {
  return (
    <li>
      <styled.a fontSize={"sm"} fontFamily={"heebo"} href={config.href}>
        <VStack gap={"1px"}>
          <Image
            src={`/icons/${config.iconFilename}`}
            width={20}
            height={20}
            alt={config.displayName}
          />
          {config.displayName}
        </VStack>
      </styled.a>
    </li>
  );
};
