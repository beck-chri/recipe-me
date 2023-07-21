import { css } from "../../../../_styled-system/css";

export const mainNavigation = css({
  backgroundColor: "highlight.primary",
  display: "flex",
  color: "text.onPrimary",
  justifyContent: "space-between",
  padding: "1rem",
  alignItems: "center",
});

export const linkList = css({
  display: "flex",
  gap: "2rem",
});

export const navigationItem = css({
  fontFamily: "raleway",
  fontWeight: "400",
});

export const logo = css({
  fontFamily: "raleway",
  fontWeight: "800",
  color: "text.onPrimary",
  fontSize: "xl",
});

export const logoNavWrapper = css({
  display: "flex",
  alignItems: "center",
  gap: "3rem",
});
