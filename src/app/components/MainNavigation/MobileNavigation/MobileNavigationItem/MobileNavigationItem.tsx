import { styled, VStack } from "../../../../../../_styled-system/jsx";
import { NavItemData } from "@/app/components/MainNavigation/config";
import Image from "next/image";

type Props = {
  config: NavItemData;
};

export const MobileNavigationItem = ({ config }: Props) => {
  return (
    <li>
      <VStack gap={"5px"}>
        <Image
          src={`/icons/${config.iconFilename}`}
          width={20}
          height={20}
          alt={config.displayName}
        />
        <styled.a fontSize={"sm"} href={config.href}>
          {config.displayName}
        </styled.a>
      </VStack>
    </li>
  );
};
