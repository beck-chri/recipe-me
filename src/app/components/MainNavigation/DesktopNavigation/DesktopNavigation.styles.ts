import { styled } from "../../../../../_styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    backgroundColor: "highlight.primary",
    display: "flex",
    color: "text.onPrimary",
    justifyContent: "space-between",
    paddingX: "1rem",
    alignItems: "center",
    hideBelow: "sm",
    position: "fixed",
    width: "100%",
    height: "4rem",
    boxShadow: "0px 0px 5px 2px rgb(0 0 0 / 10%)",
  },
});

export const LinkList = styled("ul", {
  base: {
    display: "flex",
    gap: "2rem",
  },
});

export const NavigationItem = styled("a", {
  base: {
    fontFamily: "raleway",
    fontWeight: "400",
  },
});

export const LogoWrapper = styled("span", {
  base: {
    fontFamily: "raleway",
    fontWeight: "800",
    color: "text.onPrimary",
    fontSize: "xl",
  },
});

export const LogoNavWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
  },
});
