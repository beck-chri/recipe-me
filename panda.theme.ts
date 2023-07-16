import { Theme } from "@pandacss/types";

export const theme: Theme = {
  // 👇🏻 Define your tokens here
  semanticTokens: {
    colors: {
      highlight: {
        primary: {
          value: "#8D1C04",
        },
        secondary: {
          value: "#460000",
        },
        tertiary: {
          value: "#FFA982",
        },
      },
      background: {
        value: { _lightTheme: "#FFFFFF", _darkTheme: "#000000" },
      },
      text: {
        onBackground: {
          value: { _lightTheme: "#000000", _darkTheme: "#FFFFFF" },
        },
        onPrimary: {
          value: "#ffffff",
        },
      },
    },
    fonts: {
      body: { value: "Comic Sans MS, Comic Sans, cursive, serif" },
    },
  },
};
