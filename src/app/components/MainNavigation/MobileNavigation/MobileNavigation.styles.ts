import { styled } from "../../../../../_styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    borderTopRadius: "20px",
    marginTop: "auto",
    backgroundColor: "background",
    hideFrom: "md",
    boxShadow: "0px 0px 5px 2px rgb(0 0 0 / 10%)",
    padding: ".6rem",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    minHeight: "4rem",
  },
});

export const LinkList = styled("ul", {
  base: {
    display: "flex",
    justifyContent: "space-around",
  },
});
