import { css } from "../../../../styled-system/css";

export const button = css({
  backgroundColor: "highlight.primary",
  borderRadius: "full",
  fontSize: "md",
  paddingX: "1",
  paddingY: "2",
  color: "white",
  cursor: "pointer",
  minWidth: "20",
  boxShadow: "md",
  _hover: {
    backgroundColor: "highlight.secondary",
  },
});
