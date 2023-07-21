import { css } from "../../../../styled-system/css";

export const mainNavigation = css({
  backgroundColor: "highlight.primary",
  display: "flex",
  color: "text.onPrimary",
  justifyContent: "space-between",
  padding: "1rem",
  alignItems: "center",
});

export const LinkList = css({
  display: "flex",
  gap: "2rem",
});

export const logo = css({
  fontFamily: "raleway",
  fontWeight: "800",
  color: "text.onPrimary",
  fontSize: "xl",
});
